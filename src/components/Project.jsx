import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Project() {
  const [index, setIndex] = useState(0);
  const [badge, setBadge] = useState(0);

  return (
    <div className="projects">
      <div className="project">
        <div className="images">
          <h1>Project Personal</h1>
          <div className="image-wrapper">
            <div className="main-project">
              <Image width={600} height={350} onClick={() => setIndex(0)} alt="lathy" src="/images/lathy-private.png" />
            </div>
            <div className="other-project">
              <div className="other-main" hidden={badge != 0}>
                <Image width={190} onClick={() => setIndex(1)} height={100} alt="lathy" src="/images/shopping-cart.jpg" />
                <Image width={190} onClick={() => setIndex(2)} height={100} alt="lathy" src="/images/sistem-magang.jpg" />
                <Image width={190} onClick={() => setIndex(3)} height={100} alt="lathy" src="/images/travel-go.jpg" />
              </div>
              <div className="others" hidden={badge != 1}>
                <Image width={190} onClick={() => setIndex(4)} height={100} alt="lathy" src="/images/todolist.png" />
                <Image width={190} onClick={() => setIndex(5)} height={100} alt="lathy" src="/images/calculator.png" />
                <Image width={190} onClick={() => setIndex(6)} height={100} alt="lathy" src="/images/snapshoot.png" />
              </div>
              <div className="others" hidden={badge != 2}>
                <Image width={190} onClick={() => setIndex(7)} height={100} alt="lathy" src="/images/img-4.jpg" />
                <Image width={190} onClick={() => setIndex(8)} height={100} alt="lathy" src="/images/img-5.jpg" />
                <Image width={190} onClick={() => setIndex(9)} height={100} alt="lathy" src="/images/img-6.jpg" />
              </div>
            </div>
          </div>
          <div className="change-image">
            <div className="badge-wrapper">
              <span className="badge-item select-img" onClick={() => setBadge(0)}></span>
              <span className="badge-item select-img" onClick={() => setBadge(1)}></span>
              <span className="badge-item select-img" onClick={() => setBadge(2)}></span>
            </div>
          </div>
        </div>
        <div className="project-info">
          <div className="info" hidden={index != 0}>
            <h1>Lathy Private</h1>
            <p>Pengambangan website pribadi menggunakan, MongoDB, Express, React, Node.js.</p>
            <div className="visit-btn">
              <a type="button" href="https://lathy-private.vercel.app/" target="_blank" rel="noreferrer">
                Visit
              </a>
            </div>
          </div>
          <div className="info" hidden={index != 1}>
            <h1>Shopping Tech</h1>
            <p>Pengembangan website Dinamis menggunaakan React dan Vite.</p>
            <div className="visit-btn">
              <a type="button" href="https://shopping-cart-mocha-alpha.vercel.app/" target="_blank" rel="noreferrer">
                Visit
              </a>
            </div>
          </div>
          <div className="info" hidden={index != 2}>
            <h1>Sistem Magang</h1>
            <p>Pengembangan Website Statis menggunakan React dan Vite.</p>
            <div className="visit-btn">
              <a type="button" href="https://sistem-magang-mahasiswa.vercel.app/" target="_blank" rel="noreferrer">
                Visit
              </a>
            </div>
          </div>
          <div className="info" hidden={index != 3}>
            <h1>Travel Go</h1>
            <p>Pengembangan Website Statis menggunakan HTML, CSS dan Javascript.</p>
            <div className="visit-btn">
              <a type="button" href="https://travel-go-chi.vercel.app/" target="_blank" rel="noreferrer">
                Visit
              </a>
            </div>
          </div>
          <div className="info" hidden={index != 4}>
            <h1>Todo List</h1>
            <p>Pengembangan website daftar tugas sederhana menggunakan React Js.</p>
            <div className="visit-btn">
              <a type="button" href="https://todo-list-two-orcin.vercel.app/" target="_blank">
                Visit
              </a>
            </div>
          </div>
          <div className="info" hidden={index != 5}>
            <h1>Calculator</h1>
            <p>Pengembangan kalkulator berbasis website sederhana menggunakan React Js.</p>
            <div className="visit-btn">
              <a type="button" href="https://calculator-three-flax.vercel.app/" target="_blank">
                Visit
              </a>
            </div>
          </div>
          <div className="info" hidden={index != 6}>
            <h1>Snapshoot</h1>
            <p>Pengembangan website potret gambar yang diambil dari Unsplash.com menggunakan Axios API.</p>
            <div className="visit-btn">
              <a type="button" href="https://snapshoot-theta.vercel.app/" target="_blank">
                Visit
              </a>
            </div>
          </div>
          {/* <div className="info" hidden={index != 7}>
            <h1>Pencari Hacker</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus nihil cupiditate, quam dicta dolorem at pariatur error amet reprehenderit explicabo deserunt vitae ipsa eaque obcaecati, modi sit perferendis eligendi
              asperiores consequatur, assumenda sapiente! Aliquid alias fugit fugiat quos dolor aut sit, suscipit atque! Molestias, hic numquam reiciendis vero ea eveniet.
            </p>
            <div className="visit-btn">
              <a type="button" href="#" target="_blank">
                Visit
              </a>
            </div>
          </div>
          <div className="info" hidden={index != 8}>
            <h1>Pemburu Wanita</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus nihil cupiditate, quam dicta dolorem at pariatur error amet reprehenderit explicabo deserunt vitae ipsa eaque obcaecati, modi sit perferendis eligendi
              asperiores consequatur, assumenda sapiente! Aliquid alias fugit fugiat quos dolor aut sit, suscipit atque! Molestias, hic numquam reiciendis vero ea eveniet.
            </p>
            <div className="visit-btn">
              <a type="button" href="#" target="_blank">
                Visit
              </a>
            </div>
          </div>
          <div className="info" hidden={index != 9}>
            <h1>Pemberantas Janda</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus nihil cupiditate, quam dicta dolorem at pariatur error amet reprehenderit explicabo deserunt vitae ipsa eaque obcaecati, modi sit perferendis eligendi
              asperiores consequatur, assumenda sapiente! Aliquid alias fugit fugiat quos dolor aut sit, suscipit atque! Molestias, hic numquam reiciendis vero ea eveniet.
            </p>
            <div className="visit-btn">
              <a type="button" href="#" target="_blank">
                Visit
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
