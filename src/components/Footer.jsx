import Image from 'next/image';

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="author">
          <p>
            Created By |{' '}
            <a href="http://www.instagram.com/hardimahendra_" rel="noreferrer" target="_blank">
              Hardi Mahendra
            </a>
          </p>
        </div>
        <div className="about-footer">
          <div className="profil-footer">
            <div className="info-author-footer">
              <h1>Hardi Mahendra</h1>
              <hr />
              <h1>Junior Web Developer</h1>
            </div>
            <Image width={45} height={45} alt="profil" src="/images/pas-foto.jpg" />
          </div>
          <div className="social-media-footer">
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
      </div>
    </>
  );
}
