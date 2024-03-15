import './CardPerfil.css'
import Portada from '../../Images/Portada.jpeg'
import Perfil from '../../Images/Perfil.jpeg'

function CardPerfil() {
    return ( 
        <>
            <section className='container-Perfil'>
                <div className="profile-container" style={{borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}}>
                    <img src={Portada} alt="Background" className="background-image"/>
                    <img src={Perfil} alt="Profile" className="profile-picture"/>
                </div>
                <div className='container-textPerfil'>
                    <h3>Joanna Rosenbaum</h3>
                    <p>Esta es una publicación.</p>
                </div>
                <div className='container-public'>
                    <div className='containerPublicacion' style={{marginRight: '10px'}}>
                        <h3 className='sinMargen'>24</h3>
                        <p>Publicaciones</p>
                    </div>
                    <div className='containerArticulo'>
                        <h3 className='sinMargen'>136</h3>
                        <p>Artículos</p>
                    </div>
                </div>
            </section>
        </>
     );
}

export default CardPerfil;