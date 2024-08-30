import './Friend.css'

export default function Friend({friend}){
    // console.log(friend)



    const {name, email, phone, address} = friend;
   const {street, suite, city, zupcode} =address;
    // const {street} =  friend[0];

    return(
        <div className='box'>
            <h2>Name: {name} </h2>
            <h3>Email: {email} </h3>
            <h3>Address: {phone}</h3>
            <h3>Address: {street}</h3>
            <h5>Suite: {suite}</h5>
            <h5>City: {city}</h5>
            <h5>Zip Code: {zupcode}</h5>
        </div>
    )
}