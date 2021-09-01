import Image from 'next/image'

const Informations = () => {
    return (
        <div className="flex justify-between">
            <div>
                <Image
                    src="/images/me.jpg" 
                    height={144} 
                    width={144} 
                    alt="Ma photo"
                    className="rounded-full"
                />
            </div>

            <div className="border-l-2 border-gray-400 pl-6 ml-6">
                <p className="text-green">Adresse</p>
                <p className="text-sm">17, rue de la poste<br/>97434 Saint Gilles les bains</p>
                <p className="text-green">Contact</p>
                <p className="text-sm">0692 11 51 21</p>
                <p className="text-sm">paulmouchel@live.fr</p>
                <p className="text-green">Infos</p>
                <p className="text-sm">31 ans - Permis B - Véhiculé</p>
</div>
        </div>
    )
}

export default Informations;