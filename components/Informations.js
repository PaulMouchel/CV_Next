import Image from 'next/image'

const Informations = () => {
    return (
        <>
            <Image
                src="/images/me.jpg" 
                height={144} 
                width={144} 
                alt="Ma photo"
                className="rounded-full"
            />

            Adresse
17, rue de la poste
97434 Saint Gilles les bains
Contact
0692 11 51 21
paulmouchel@live.fr
Infos
31 ans - Permis B - Véhiculé
            
        </>
    )
}

export default Informations;