import Head from 'next/head';
import { useMemo, useState } from 'react';
import type { NextPage } from 'next';
import { ArrowRight, Check, Minus, Plus, ShoppingBag, Sparkles, X } from 'lucide-react';

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  accent: string;
  features: string[];
};

const products: Product[] = [
  { id: 1, name: 'Aurora Hoodie', category: 'Apparel', price: 68, description: 'Heavyweight organic cotton with a relaxed fit.', accent: 'violet', features: ['Organic cotton', 'Unisex fit', 'Free returns'] },
  { id: 2, name: 'Daily Carry Tote', category: 'Accessories', price: 42, description: 'A structured canvas tote for everyday essentials.', accent: 'amber', features: ['Reinforced handles', '16L capacity', 'Machine washable'] },
  { id: 3, name: 'Studio Bottle', category: 'Lifestyle', price: 28, description: 'Double-wall stainless steel, cold for 24 hours.', accent: 'cyan', features: ['BPA-free', 'Leak-proof lid', '750ml capacity'] },
  { id: 4, name: 'Cloud Cap', category: 'Accessories', price: 34, description: 'Low-profile twill cap finished with a soft brim.', accent: 'rose', features: ['Adjustable strap', 'Embroidered mark', 'One size fits most'] },
];

const categories = ['All', 'Apparel', 'Accessories', 'Lifestyle'];

const Home: NextPage = () => {
  const [category, setCategory] = useState('All');
  const [cart, setCart] = useState<number[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const visibleProducts = useMemo(() => category === 'All' ? products : products.filter((product) => product.category === category), [category]);
  const cartProducts = cart.map((id) => products.find((product) => product.id === id)).filter(Boolean) as Product[];
  const total = cartProducts.reduce((sum, product) => sum + product.price, 0);

  const addToCart = (id: number) => {
    setCart((items) => [...items, id]);
    setMessage('Added to your bag');
    window.setTimeout(() => setMessage(''), 1800);
  };

  const removeFromCart = (index: number) => setCart((items) => items.filter((_, itemIndex) => itemIndex !== index));

  const checkout = async () => {
    if (!email || cart.length === 0) return;
    const response = await fetch('/api/checkout', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ items: cart, email }) });
    const data = await response.json();
    setMessage(data.message);
  };

  return (
    <>
      <Head>
        <title>Nora Goods — Everyday essentials</title>
        <meta name="description" content="Thoughtful everyday objects, responsibly made." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
      <header className="nav shell">
        <a className="brand" href="#top"><span className="brand-mark">N</span> NORA / GOODS</a>
        <nav><a href="#shop">Shop</a><a href="#story">Our story</a><button className="bag-button" onClick={() => setShowCart(true)}><ShoppingBag size={17} /> Bag <span>{cart.length}</span></button></nav>
      </header>

      <section id="top" className="hero shell">
        <div className="hero-copy"><p className="eyebrow"><Sparkles size={15} /> Designed for everyday rituals</p><h1>Good things,<br /><em>made simple.</em></h1><p className="hero-text">Thoughtful objects for the life you are building. Small-batch essentials, responsibly made and designed to last.</p><a className="primary-button" href="#shop">Explore the collection <ArrowRight size={17} /></a></div>
        <div className="hero-art"><div className="sun"></div><div className="art-card card-one">01 <span>FORM / FUNCTION</span></div><div className="art-card card-two">NORA</div><div className="art-caption">Objects with intention<br /><strong>Edition 01 / 2026</strong></div></div>
      </section>

      <section id="shop" className="shop shell"><div className="section-heading"><div><p className="eyebrow">The collection</p><h2>Made to be used.</h2></div><p className="muted">Four considered pieces for your daily rhythm.</p></div><div className="filters">{categories.map((item) => <button key={item} className={category === item ? 'filter active' : 'filter'} onClick={() => setCategory(item)}>{item}</button>)}</div><div className="product-grid">{visibleProducts.map((product) => <article className="product-card" key={product.id}><div className={`product-art ${product.accent}`}><span className="product-number">0{product.id}</span><span className="product-shape"></span></div><div className="product-info"><div className="product-meta"><span>{product.category}</span><strong>${product.price}</strong></div><h3>{product.name}</h3><p>{product.description}</p><div className="feature-row">{product.features.slice(0, 2).map((feature) => <span key={feature}><Check size={13} /> {feature}</span>)}</div><button className="add-button" onClick={() => addToCart(product.id)}>Add to bag <Plus size={16} /></button></div></article>)}</div></section>

      <section id="story" className="story shell"><div><p className="eyebrow">Our approach</p><h2>Less, but better.</h2></div><p>We believe the best products earn their place. Every Nora piece is made with honest materials, quiet details, and the intention to be used often. This template gives you a polished foundation to tell that story and sell your own collection.</p></section>

      <footer className="footer shell"><span>© 2026 Nora Goods</span><span>Built with intention.</span></footer>

      {message && <div className="toast">{message}</div>}
      {showCart && <div className="overlay" onClick={() => setShowCart(false)}><aside className="cart-drawer" onClick={(event) => event.stopPropagation()}><div className="drawer-heading"><h2>Your bag</h2><button onClick={() => setShowCart(false)}><X /></button></div>{cartProducts.length === 0 ? <div className="empty"><ShoppingBag size={32} /><p>Your bag is empty.</p><button className="primary-button" onClick={() => setShowCart(false)}>Continue shopping</button></div> : <><div className="cart-items">{cartProducts.map((product, index) => <div className="cart-item" key={`${product.id}-${index}`}><div className={`mini-art ${product.accent}`}></div><div><strong>{product.name}</strong><span>${product.price}</span></div><button onClick={() => removeFromCart(index)}><Minus size={15} /></button></div>)}</div><div className="checkout"><div className="total"><span>Total</span><strong>${total}</strong></div><input value={email} onChange={(event) => setEmail(event.target.value)} type="email" placeholder="Email for your receipt" /><button className="primary-button wide" onClick={checkout}>Continue to checkout <ArrowRight size={17} /></button><small>Demo checkout included. Connect Stripe in the API route before production.</small></div></>}</aside></div>}
      </main>
    </>
  );
};

export default Home;
