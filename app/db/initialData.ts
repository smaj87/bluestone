import { Product } from './types';

const baseProducts = [
  {
    name: 'b0006se5bq',
    number: 'singing coach unlimited',
    description:
      'singing coach unlimited - electronic learning products (win me nt 2000 xp)',
    images: [
      { url: 'https://picsum.photos/400/300', name: 'singing coach' },
      {
        url: 'https://broken.link.for.testing.notexistingtopleveldomain/400/300',
        name: 'front side',
      },
    ],
  },
  {
    name: 'b00021xhzw',
    number:
      'adobe after effects professional 6.5 upgrade from standard to professional',
    description:
      'upgrade only; installation of after effects standard new disk caching tools speed up your interactive work save any combination of animation parameters as presets',
    images: [],
  },
  {
    name: 'b00021xhzw-2',
    number: 'domino designer/developer v5.0',
    description:
      'reference domino designer/developer r5 doc pack includes the following titles: application development with domino designer (intermediate-advanced) 536 pages',
    images: [{ url: 'https://picsum.photos/400/300', name: 'cover' }],
  },
  {
    name: 'b00089rs4i',
    number: 'microsoft office 2019 home and business',
    description:
      'includes word excel powerpoint and outlook classic 2019 versions of word excel powerpoint and outlook for pc one-time purchase for 1 pc',
    images: [
      { url: 'https://picsum.photos/400/301', name: 'product box' },
      { url: 'https://picsum.photos/400/302', name: 'application screenshot' },
    ],
  },
  {
    name: 'b0007vhz8g',
    number: 'adobe photoshop elements 2024',
    description:
      'powered by adobe sensei ai technology automatic photo editing and creation powered by ai easy organization and sharing create stunning photos',
    images: [{ url: 'https://picsum.photos/400/303', name: 'box art' }],
  },
  {
    name: 'b000bwg89a',
    number: 'quickbooks pro 2024',
    description:
      'manage invoices expenses and inventory track sales and sales tax run reports to see how your business is doing supports up to 3 users',
    images: [
      { url: 'https://picsum.photos/400/304', name: 'software package' },
      { url: 'https://picsum.photos/400/305', name: 'dashboard view' },
    ],
  },
  {
    name: 'b001cd8p0e',
    number: 'rosetta stone spanish latin america level 1-5',
    description:
      'learn to speak spanish with confidence immersive method teaches you to think in spanish speech recognition technology helps perfect pronunciation',
    images: [
      { url: 'https://picsum.photos/400/306', name: 'product packaging' },
    ],
  },
  {
    name: 'b002rl8ihu',
    number: 'norton 360 deluxe 5 devices',
    description:
      'real-time threat protection secure vpn password manager cloud backup safeguard 5 pcs macs smartphones or tablets',
    images: [
      { url: 'https://picsum.photos/400/307', name: 'product card' },
      { url: 'https://picsum.photos/400/308', name: 'interface preview' },
    ],
  },
  {
    name: 'b003di262g',
    number: 'corel paintshop pro 2024',
    description:
      'photo editing software with ai-powered features creative filters and effects layers and masks support raw file compatibility professional results',
    images: [],
  },
  {
    name: 'b004hd7elo',
    number: 'vmware workstation 17 pro',
    description:
      'run multiple operating systems simultaneously desktop hypervisor for windows and linux ideal for developers and it professionals',
    images: [
      { url: 'https://picsum.photos/400/309', name: 'virtual machine view' },
    ],
  },
  {
    name: 'b005k7sx6c',
    number: 'acronis true image 2024',
    description:
      'complete cyber protection solution backup and recovery anti-malware and antivirus remote access and management cloud storage included',
    images: [
      { url: 'https://picsum.photos/400/310', name: 'software interface' },
      { url: 'https://picsum.photos/400/311', name: 'backup dashboard' },
    ],
  },
  {
    name: 'b006fx4mba',
    number: 'dragon naturallyspeaking premium 15',
    description:
      'speech recognition software turn your voice into text 3x faster than typing accurate dictation custom voice commands',
    images: [{ url: 'https://picsum.photos/400/312', name: 'box design' }],
  },
  {
    name: 'b007gktng2',
    number: 'pinnacle studio 26 ultimate',
    description:
      'video editing software with unlimited tracks color grading tools 2000+ effects and transitions 4k and 360 video support',
    images: [
      { url: 'https://picsum.photos/400/313', name: 'product image' },
      { url: 'https://picsum.photos/400/314', name: 'timeline editor' },
      { url: 'https://picsum.photos/400/315', name: 'effects library' },
    ],
  },
  {
    name: 'b008yz4o0w',
    number: 'malwarebytes premium 1 year 3 devices',
    description:
      'advanced malware and spyware removal real-time protection anti-exploit technology anti-ransomware fast scanning',
    images: [{ url: 'https://picsum.photos/400/316', name: 'package front' }],
  },
  {
    name: 'b009h74wpe',
    number: 'turbotax deluxe 2024 tax software',
    description:
      'federal and state tax filing maximize 350+ deductions and credits free audit support accurate calculations guaranteed easy step-by-step guidance',
    images: [],
  },
];

const generateProducts = (): Product[] => {
  const products: Product[] = [];
  const targetCount = 1000;

  for (let i = 0; i < targetCount; i++) {
    const baseProduct = baseProducts[i % baseProducts.length];
    const variant = Math.floor(i / baseProducts.length);

    products.push({
      name: `${baseProduct.name}-${i}`,
      number:
        variant > 0
          ? `${baseProduct.number} variant ${variant}`
          : baseProduct.number,
      description: baseProduct.description,
      images: baseProduct.images.map((img, idx) => ({
        url: img.url.includes('picsum')
          ? `https://picsum.photos/400/${300 + i + idx}`
          : img.url,
        name: img.name,
      })),
    });
  }

  return products;
};

export default generateProducts() as Product[];
