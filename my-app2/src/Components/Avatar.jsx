function  Avatar({url , alt, name , rounded }){

    const styles={margin:"30px" , borderRadius: rounded? "50%" : "30%" };

    return (
        <div>
            <img src={url} alt={alt} 
            width="150px"  
            style={styles} />

            <h3>{name}</h3>
        </ div>
    );
}

export default  Avatar ;