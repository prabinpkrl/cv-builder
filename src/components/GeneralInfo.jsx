/* eslint-disable react/prop-types */

const GeneralInfo = ({ onchange, data }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        onchange('generalInfo', { ...data, [name]: value });
    };
    return (
        <>
            <div>
                <h2>General Information</h2>
                <input name="name" placeholder="Name" value={data.name} onChange={handleChange} />
                <input name="email" placeholder="Email" value={data.email} onChange={handleChange} />
                <input name="phone" placeholder="Phone" value={data.phone} onChange={handleChange} />
            </div>
        </>
    )
}

export default GeneralInfo