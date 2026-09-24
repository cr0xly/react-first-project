interface DiamondCardProps {
    image: string
    productName?: string
    price: string
    sale?: boolean
}
export default function DiamondCard({
    image,
    productName = "NO NAME", // default value for productName accompanied with the optional interface property
    price,
    sale
}: DiamondCardProps){
    return (
        <div className="DiamondCard">
            <img 
            src={image} 
            alt="ring1"
            width="100px"
            />
            <h2>{productName}</h2>
            <p>{price}</p>
            <p style={{color: "red", fontWeight: "bolder"}}>
                {sale && "SALE"}
            </p>
        </div>
    )
}