export type Work = {
  company: string
  deliverable: string[]
  fromDate: string
  toDate: string
}

export const worksData: Work[] = [
  {
    company: 'Fuerte Developers.',
    deliverable: [
      'I been working on the 2 project through my internship.',
      'E-Commerce and E-Commerce',
    ],
    fromDate: '2023-06',
    toDate: '2023-08',
  },
  // {
  //   company: 'NextGen Software',
  //   deliverable: [
  //     'Developed a full-stack e-commerce platform with product listings, cart functionality, and payment integration.',
  //     'Integrated a payment gateway for seamless transactions.',
  //   ],
  //   fromDate: '2017-08',
  //   toDate: '2019-02',
  // },
]
