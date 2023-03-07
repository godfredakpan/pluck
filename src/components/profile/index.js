/* eslint-disable jsx-a11y/anchor-is-valid */
import { useAuth0 } from "@auth0/auth0-react";
import React, { useCallback, useEffect, useState } from "react";
import getUser from "../../lib/fauna/getUser";
// import { toast } from 'material-react-toastify';
import UploadCloudinary from "../../lib/cloudinary/UploadCloudinary";
import updateUserProfile from "../../lib/fauna/updateUserProfile";
import { socialLinks } from "../Form/Input/SocialLinks";
import Loader from "./Layout/Loader";

export default function Profile() {
    const [userData, setUser] = React.useState(null)
    const { loginWithPopup, user } = useAuth0();
    const [formState, updateFormState] = useState({})
    const [selectedOption, setSelectedOption] = useState('custom')
    const localStorageUser = JSON.parse(localStorage.getItem('user') || '{}');
    const [formValues, setFormValues] = useState([{}])
    const [fields, setFields] = useState([{}]);
    const [image, setImage] = useState('');
    const [loading, setLoading] = useState(false);
    const [uploadLoading, setUploadLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            if (!user) return;
            const myUser = await getUser(localStorageUser?.email);
            localStorage.setItem('user', JSON.stringify(myUser))
        }
        fetchData();
    }, [localStorageUser?.email, user])

    const handleFile = async e => {
        setUploadLoading(true);
        const file = e.target.files[0];
        const upload = await UploadCloudinary(file);
        setImage(upload.secure_url);
        setUploadLoading(false);
    }

    useEffect(() => {
        async function init() {
            if (localStorageUser?.email) {
                const user = await getUser(localStorageUser?.email);
                if (user) {
                    setUser(user);
                    updateFormState(user?.profile || {});
                    setFormValues([user?.profile])
                }
            }
            if (user && !localStorageUser?.email) {
                const result = await getUser((user?.email || '').toLowerCase())
                if (result) {
                    setUser(result)
                    updateFormState(user.profile);
                    setFormValues([user.profile])
                } else {
                    setUser(null)
                }
            }

        }
        init()
    }, [localStorageUser?.email, loginWithPopup, user])


    const links = userData && userData.profile && Object.keys(userData.profile).map((key) => {
        return { key, value: userData.profile[key] }
    })

    const options = socialLinks.sort((a, b) => a.name.localeCompare(b?.name)).map((link, index) => {
        if (formState[link?.value]) return null;
        return <option key={index} value={link?.value}>{link?.name}</option>
    });

    const updateForm = e => {
        const { value, name } = e.target;
        const newFormValues = [...formValues];
        newFormValues[0][name] = value;
        setFormValues(newFormValues);
        updateFormState({
            ...formState,
            [name]: value
        });

    };

    const updateSocialLink = e => {
        const { value } = e.target;
        addFormFields();
        setSelectedOption(value);
    }

    const chooseFile = useCallback(() => {
        const dropArea = document.querySelector(".drop_box");
        const button = dropArea.querySelector("button");
        const input = dropArea.querySelector("input");
        button.onclick();
        input.click();
    }, [])

    if (!user && !localStorageUser?.email) {
        return <div className="col-xl-12 col-lg-12">
            <button className="btn btn-md btn-success mx-auto" onClick={() => loginWithPopup()}>Login</button>
        </div>
    }


    let addFormFields = () => {
        // setFormValues([...formValues, {}])
    }

    const getFormValues = () => {
        const values = {};
        fields.forEach((field, index) => {
            values[field.key] = field.value;
        });
        return values;
    }


    const updateUser = async () => {
        setLoading(true);
        const data = { ...formState, ...getFormValues() }
        if (image) { userData.picture = image }
        const newData = { ...userData, profile: data }
        const result = await updateUserProfile(newData);

        if (result) {
            setUser(result)
            updateFormState(result.profile);
            setFormValues([result.profile])
            localStorage.setItem('user', JSON.stringify(newData))
            setLoading(false);
            // toast.success("Profile updated successfully");
        }
    }


    function handleChanges(i, event) {
        const values = [...fields];
        values[i].value = event.target.value;
        values[i].key = selectedOption;
        setFields(values);
    }

    function handleAdd() {
        const values = [...fields];
        values.push({ key: selectedOption, value: '' });
        setFields(values);
    }

    function handleRemove(i) {
        const values = [...fields];
        values.splice(i, 1);
        setFields(values);
    }

    const url = window.location.href;

    const currentUrl = url.substring(0, url.lastIndexOf('/'));



    const removeFormValue = (key) => {
        const newFormValues = [...formValues];
        newFormValues[0][key] = '';
        setFormValues(newFormValues);
        updateFormState({ ...formState, [key]: '' })
    }


    if (loading) {
        return <Loader />
    }


    return (
        <div class="container-fluid" style={{ marginBottom: '200px' }}>
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <span href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"> Profile</span>
            </div>

            <div class="row">
                <div class="col-xl-12 col-lg-6">
                    <div class="card shadow mb-4">
                        <div class="card-body">
                            <div class="form-row">
                                <div class="form-group col-md-12">
                                    <div style={{ paddingBottom: ' 30px' }}>
                                        <h2 style={{ paddingTop: '20px' }}>{userData?.name}</h2>
                                        <p style={{ paddingTop: '20px' }}>Profile: <a rel="noreferrer" target={'_blank'} href={`${currentUrl}/user/${userData?.email}`}> Preview</a></p>
                                    </div>
                                    {links?.map((link, index) => (
                                        !link.value ? null :
                                            <div key={index} style={{ paddingBottom: '30px' }}>
                                                <label for="inputEmail4" style={{ textTransform: 'capitalize' }}>{link.key}:</label>
                                                <input onChange={updateForm} type="text" value={link.value} name={link.key} class="form-control" id="inputEmail4"
                                                    placeholder={link.value} />

                                                <button onClick={() => removeFormValue(link.key)} style={{ marginTop: '10px' }} className="btn btn-sm btn-danger">X</button>

                                            </div>
                                    ))}


                                    <p className="text-warning">Add more</p>
                                    {fields.map((field, i) => (
                                        <div className="form-group" key={i}>
                                            <select style={{ marginBottom: '10px' }} className="form-control input-form" id="socialLinks" name={selectedOption} onChange={updateSocialLink}>
                                                <option value="">Select</option>
                                                {options}
                                            </select>
                                            <input className='form-control' type="text" value={field.value} onChange={e => handleChanges(i, e)} />

                                            {fields.length !== 1 && <button style={{ marginTop: '10px', marginRight: '10px' }} className="btn-sm btn btn-danger" type="button" onClick={() => handleRemove(i)}>
                                                -
                                            </button>
                                            }
                                            <button style={{ marginTop: '10px' }} className="btn-sm btn btn-success" type="button" onClick={handleAdd}>
                                                +
                                            </button>
                                        </div>
                                    ))}

                                    <p>Profile:</p>
                                    {uploadLoading && <p className="text-success">Loading...</p>}
                                    {image ? <img width="10%" class="img-profile" src={image} alt="" /> : <img class="img-profile" src={localStorageUser.picture} width="10%" alt="" />
                                    }
                                    <div className="drop_box">
                                        <label htmlFor="fileID" className="btn btn-sm btn-primary">Upload</label>
                                        <input name="file" type="file" onChange={handleFile} hidden accept='png, jpg' id="fileID" style={{ display: 'none' }} />
                                        <button onClick={chooseFile} disabled={uploadLoading && true} className="btn-sm btn-upload"><i className="fa fa-cloud-upload fa-3x" aria-hidden="true"></i></button>
                                    </div>
                                    {/* </div> */}
                                </div>
                                <div class="col-md-6 text-center">
                                    <div style={{ paddingBottom: ' 30px' }}>
                                        {/* make div appear in center middle */}
                                        {/* <img style={{ width: '100', height: '100', backgroundImage: `url(${localStorageUser.picture})` }} alt='' class="backdrop linktree" /> */}

                                    </div>
                                </div>
                            </div>
                            <button onClick={updateUser} class="btn btn-primary col-md-12" style={{ marginBottom: '50px' }}>Update</button>

                        </div>
                    </div>
                </div>

            </div >

        </div >


    );
}