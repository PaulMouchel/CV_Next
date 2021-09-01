import Image from 'next/image'
import { FaTelegramPlane, FaPhone } from 'react-icons/fa';

const Informations = () => {
    return (
        <div className="flex justify-between items-center">
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
                <h4 className="text-green">Adresse</h4>
                <p className="text-sm">17, rue de la poste<br/>97434 Saint Gilles les bains</p>
                <h4 className="text-green">Contact</h4>
                <p className="text-sm"><a href="tel:+262692115121"><FaPhone className="inline text-gray-600"/> 0692 11 51 21</a></p>
                <p className="text-sm"><a href="mailto:paulmouchel@live.fr"><FaTelegramPlane className="inline text-gray-600"/> paulmouchel@live.fr</a></p>
                <h4 className="text-green">Infos</h4>
                <p className="text-sm">31 ans - Permis B - Véhiculé</p>
</div>
        </div>
    )
}

export default Informations;