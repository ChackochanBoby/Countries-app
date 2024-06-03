import placeholder from './assets/placeholder.jpg'
function Card(props){
    console.log(props.flag)
    return(
        <article className='rounded-md overflow-hidden bg-emerald-50 flex flex-col p-2'>
            <div className='flex flex-row align-middle rounded-md overflow-hidden aspect-video justify-center'>
            <img src=
            {
             props.flag?props.flag:placeholder
            } 
            alt="" className='block w-full' />
            </div>
            <div className='w-full mt-2 px-2'>
                <h2 className='text-2xl text-black text-center uppercase'>{props.countryName}</h2>
                <p className='text-lg text-black capitalize'>Region : {props.region}</p>
            </div>
        </article>
    )
}
export default Card;