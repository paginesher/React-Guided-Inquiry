import React from "react";
import BasicInfo from "./medium";

const BasicInfoList = () => {
    const peoplesInfo = [

        {name: "PJ",
        age: "25",
        dateOfBirth: "08/17/1996",
        number: "704-775-2978",
        email: "pjher@email.com",
        address: "123 Main Rd",
        city: "Lawrenceville",
        state: "GA"},

        {name: "Justin",
        age: "33",
        dateOfBirth: "07/17/1989",
        number: "111-222-333",
        email: "justin@email.com",
        address: "456 Main Rd",
        city: "Charllote",
        state: "NC"},

        {name: "Jordon",
        age: "28",
        dateOfBirth: "06/25/1993",
        number: "555-777-8585",
        email: "jordon@email.com",
        address: "789 Main Rd",
        city: "Somewhere Nice",
        state: "TN"},

        {name: "Osiel",
        age: "26",
        dateOfBirth: "07/25/1994",
        number: "575-505-5675",
        email: "osiel@email.com",
        address: "012 Main Rd",
        city: "Charllote",
        state: "Nc"},

        {name: "Jodi",
        age: "32",
        dateOfBirth: "05/25/1990",
        number: "111-545-5345",
        email: "jodi@email.com",
        address: "101 Main Rd",
        city: "New York",
        state: "NY"},

        {name: "Isaac",
        age: "24",
        dateOfBirth: "03/07/1998",
        number: "777-575-7775",
        email: "isaac@email.com",
        address: "098 Main Rd",
        city: "Charllote",
        state: "NC"}
    ]; 

    return (
        <div className="peopleList">
            {peoplesInfo.map((info) => (
                <BasicInfo name={info.name} age={info.age} dateOfBirth={info.dateOfBirth} number={info.number} email={info.email} address={info.address} city={info.city} state={info.state} />
            ))}
        </div>
    );

};

export default BasicInfoList;