function Card({ data }) {
    const { ip, org, city, postal, region, country, timezone } = data;

    return (
        <div className="card">
            <label>
                Your ip address
                <input type="text" value={ip} readOnly />
            </label>
            <label>
                Server
                <input type="text" value={org} readOnly />
            </label>
            <label>
                Localisation
                <input type="text" value={`${city} ${postal} ${region}`} readOnly />
            </label>
            <label>
                Timezone
                <input type="text" value={`${country}/${timezone}`} readOnly />
            </label>
        </div>
    );
}

export default Card;