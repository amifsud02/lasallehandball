const MiniGallery = () => {
   
    const images = [
        {
            src: "https://scontent-ams4-1.xx.fbcdn.net/v/t39.30808-6/280491977_400738585395240_7320882294660743590_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=0debeb&_nc_ohc=NCbZ4BoWqFsAX-77WU4&_nc_ht=scontent-ams4-1.xx&oh=00_AT-I1XWSx_tFsNAg_2yv5cfPpXNAlbRxpCfN_TLY2Ju7Aw&oe=63318FB2"
        },
        {
            src: "https://scontent-ams2-1.xx.fbcdn.net/v/t39.30808-6/280039453_400738418728590_3539813474482083215_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=0debeb&_nc_ohc=yC78l-QMJP0AX_O4ede&_nc_ht=scontent-ams2-1.xx&oh=00_AT-rXQh9CkE236uzeuAiY9iRicKXHaDNPK1vJkhhagg-bA&oe=63320C6F"  
        },
        {
            src: "https://scontent-ams4-1.xx.fbcdn.net/v/t39.30808-6/280703721_400738258728606_2597178951585533225_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0debeb&_nc_ohc=bylF4hRArKQAX_KJafT&tn=P41k5Rqv8ZyfQxBY&_nc_ht=scontent-ams4-1.xx&oh=00_AT_RkHycDkh9FjjmGoLY_7bh643Sgm0_LOtgbynDqFtozw&oe=6332D7FD"
        },
        {
            src: "https://scontent-ams2-1.xx.fbcdn.net/v/t39.30808-6/280981401_400738112061954_3744566199012587812_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=0debeb&_nc_ohc=J2LpNCwftQsAX9ZaaSF&_nc_ht=scontent-ams2-1.xx&oh=00_AT9_NzwLPAw_YsLcM-52eVnH_X5Kp1Wi3bQaZnV-LDU-MA&oe=633217DE"
        },
        {
            src: "https://scontent-ams2-1.xx.fbcdn.net/v/t39.30808-6/280039453_400738418728590_3539813474482083215_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=0debeb&_nc_ohc=yC78l-QMJP0AX_O4ede&_nc_ht=scontent-ams2-1.xx&oh=00_AT-rXQh9CkE236uzeuAiY9iRicKXHaDNPK1vJkhhagg-bA&oe=63320C6F"  
        },
    ]

    return (
        <>
            <div className="mg-gallery" style={{textAlign: 'center'}}>
                <div className="grid">
                    
                    <div className="item wide" style={{ backgroundImage: `url(${images[0].src})` }}></div>
                    <div className="item wide" style={{ backgroundImage: `url(${images[1].src})` }}></div>
                    <div className="item small" style={{ backgroundImage: `url(${images[2].src})` }}></div>
                    <div className="item wide" style={{ backgroundImage: `url(${images[3].src})` }}></div>
                    <div className="item small" style={{ backgroundImage: `url(${images[4].src})` }}></div>


                    {/* <div className="item" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1439209306665-700c9bca794c?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=)'}}></div> */}
                    
                    </div>
            </div>
            
        </>
    )

}
 
export default MiniGallery;