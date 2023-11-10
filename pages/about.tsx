import Link from 'next/link';
import Image from 'next/image';
import PhlaskIcon from '../public/PHLASK_v2.svg';

export default function About(){
  return(
    <>
      <h1>So what is this all about?</h1>
     <Image
     src={PhlaskIcon}
     alt="Does this work"
     >
      </Image>
      <h3>Reminder: history didn't start in 1492.</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ex rerum, porro reiciendis impedit necessitatibus non nemo omnis accusamus consequuntur exercitationem culpa veritatis adipisci minus quae ullam sit voluptatibus. Accusantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta doloremque aliquid esse error, eligendi, nobis aliquam sit autem suscipit enim voluptatibus quidem excepturi commodi soluta, nemo vero. Quos, dolor ad? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis recusandae totam vitae minus fuga. Placeat iure maxime pariatur voluptate dolorum cumque, eveniet, neque vero deserunt sunt ipsa, hic unde voluptatum?</p>
    </>
  )
}