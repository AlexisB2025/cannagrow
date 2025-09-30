export const posts = [
  {
    id: 'post-1',
    authorId: 'user-1',
    authorName: 'Cultivador1',
    description: 'Primer cultivo, observando crecimiento.',
    imageUrl: 'https://picsum.photos/seed/plant1/800/1000',
    strain: 'Blue Dream',
    genetics: 'sativa',
    cannabinoid: 'THC',
    createdAt: new Date().toISOString(),
    likes: 12,
    comments: 3
  },
  {
    id: 'post-2',
    authorId: 'user-2',
    authorName: 'Cultivador2',
    description: 'Controlando nutrientes, todo ok.',
    imageUrl: 'https://picsum.photos/seed/plant2/800/1000',
    strain: 'OG Kush',
    genetics: 'indica',
    cannabinoid: 'THC',
    createdAt: new Date().toISOString(),
    likes: 34,
    comments: 7
  },
  {
    id: 'post-3',
    authorId: 'user-3',
    authorName: 'Cultivador3',
    description: 'Semillas nuevas, a germinar.',
    imageUrl: 'https://picsum.photos/seed/plant3/800/1000',
    strain: 'NN',
    genetics: 'NN',
    cannabinoid: 'NN',
    createdAt: new Date().toISOString(),
    likes: 5,
    comments: 0
  }
];
