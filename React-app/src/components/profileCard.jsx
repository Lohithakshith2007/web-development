function ProfileCard({ user, onclickfunction }) {
    const { name, age, role, skills } = user;

    return (
        <>
            <h1>{name}</h1>
            <p>Age: {age}</p>
            <p>Role: {role}</p>


            {skills.map(skill => (
                <li key={skill}>{skill}</li>
            ))}

            <button onClick={onfollow}>follow</button>

        </>
    )
};

export default ProfileCard;