import Image from 'next/image';

export default function Profil() {
  return (
    <div className="absolute right-[15%] top-[30%] bg-yellow-500 h-[300px] w-[300px] flex justify-center items-center rounded">
      <div className="absolute">
        <div className="info-author">
          <h1>Hardi Mahendra</h1>
          <hr />
          <h1>Junior Web Developer</h1>
        </div>
        <Image width={150} height={150} alt="profil" src="/images/pas-foto.jpg" />
      </div>
      <div className="social-media">
        <span>
          <a href="https://linkedin.com/in/hardi-mahendra-2986a8146" rel="noreferrer" target="_blank">
            <Image height={32} width={32} className="nextjs" alt="brand" src="/icons/linkedin-svgrepo.svg" />
          </a>
          <a href="https://instagram.com/hardimahendra_" rel="noreferrer" target="_blank">
            <Image height={32} width={32} className="nextjs" alt="brand" src="/icons/instagram-svgrepo.svg" />
          </a>
          <a href="https://github.com/hardimahendra" rel="noreferrer" target="_blank">
            <Image height={32} width={32} className="nextjs" alt="brand" src="/icons/github.png" />
          </a>
        </span>
      </div>
    </div>
  );
}
