import { useState } from 'react';

export const useHomePage = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const carouselData = [
    {
      title: 'Who we are',
      department: 'Technology Company',
      description:
        'Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    },
    {
      title: 'What we do',
      department: 'Professional Brand Management',
      description:
        'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
    },
    {
      title: 'How we do',
      department: 'Strategize, Design, Collaborate',
      description:
        'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse sequam nihil molestiae consequatur.',
    },
  ];

  const ourCoreValuesData = [
    {
      title: 'Dedication',
      description:
        'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.',
    },
    {
      title: 'Intellectual Honesty',
      description:
        'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias conse.',
    },
    {
      title: 'Curiosity',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.',
    },
  ];

  const handlePrevSlide = () => {
    if (currentSlide !== 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };
  const handleNextSlide = () => {
    if (currentSlide !== carouselData.length) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  return { currentSlide, setCurrentSlide, carouselData, ourCoreValuesData, handlePrevSlide, handleNextSlide };
};
