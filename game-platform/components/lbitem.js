const Lbitem = props => {
    const { avatar, username } = props;
    return (
        <li>
            <figure><img src={avatar} /></figure>
            <h3>{username}</h3>
        </li>
    )
}

export default Lbitem