import { useEffect, useState } from "react";
import "../Assets/css/UserProfile.css"
import Loader from "./Loader";

const UserProfile = props => {

    const [userData, setData] = useState(undefined);    

    useEffect(() => {
        fetch(`https://dummyapi.io/data/v1/user/${props.id}`, {
            method: 'GET',
            headers: {
                'app-id': '61b2f57263e10a2ded10958f'
            }
        })
            .then(res => res.json())
            .then(data => setData(data));
    }, []);   

    return (
        <div className="user-modal">
            <span onClick={() => props.modal(false)}>X</span>
            <div>
                <h3>Profile</h3>
                <div className="profile">
                    {userData === undefined ? <Loader /> : userDetail(userData)}
                </div>                
            </div>
        </div>
    )
}

const userDetail = data => {
    return (
        <>
            <figure>
                <img src={data.picture} alt={data.firstName} />
            </figure>
            <div className="detail">
                <ul>
                    <li>
                        <h4>Personal Detail :</h4>
                    </li>
                    <li><span>Name :</span> {data.title}. {data.firstName} {data.lastName}</li>
                    <li><span>Gender :</span> {data.gender}</li>
                    <li><span>DOB :</span> {data.dateOfBirth}</li>
                    <li><span>Email ID :</span> {data.email}</li>
                    <li><span>Contact No. :</span> {data.phone}</li>
                    <li>
                        <h4>Address :</h4>
                    </li>
                    <li><span>Street :</span> {data.location.city}</li>
                    <li><span>City :</span> {data.location.city}</li>
                    <li><span>State :</span> {data.location.state}</li>
                    <li><span>Country :</span> {data.location.country}</li>
                </ul>
            </div>
        </>
    )
}

export default UserProfile;