import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import PageHeader from '../../components/common/PageHeader';

const cardData = [
  {
    title: 'Our Motto',
    content: 'Wisdom Comes From God',
    icon: 'images/motto.jpg',
  },
  {
    title: 'Our Mission',
    content: 'To Provide Efficient, Effective And Holistic All-Round Quality Education Enabling Students To Unleash Their Full Potential And Fit In Highly Competitive Society',
    icon: 'images/mission.jpg',
  },
  {
    title: 'Our Core Values',
    content: [
      'Integrity',
      'Humility',
      'Excellence',
      'Honesty',
      'Discipline',
      'Self Respect',
      'Respect For Others',
    ],
    icon: 'images/values.jpg',
  },
  {
    title: 'Our Vision',
    content: 'To Provide Quality And Competitive Secondary Education Grounded On Christian Values',
    icon: 'images/vision.jpg',
  },
];

const HistoryPage = () => {
  return (
    <>
      <Helmet>
        <title>Our History - St. Noa Mawagali S.S.S.</title>
        <meta name="description" content="Discover the rich history and heritage of St. Noa Mawagali S.S.S., from our founding to present day." />
      </Helmet>

      <PageHeader 
        title="About Us" 
        subtitle="Snoams"
        backgroundImage="images/sliders/4.jpg"
      />

      <section className="py-16 bg-white text-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-12">
            {/* Who is Noa Mawaggali? */}
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-full md:w-1/2 order-1 md:order-1">
                <img src="images/noa.jpg" alt="Noa Mawaggali" className="w-full h-64 object-cover rounded-xl shadow-md mb-4 md:mb-0" />
              </div>
              <div className="w-full md:w-1/2 order-2 md:order-2 flex flex-col justify-center">
                <h3 className="font-bold text-primary-600 mb-2 text-xl md:text-2xl text-center md:text-right">Who is Noa Mawaggali?</h3>
                <p className="text-gray-700 text-sm leading-relaxed text-justify">
                  He was born at kasibukulu in Singo county around 1851. When he grew up, he took up services of Mukomera. Mawaggali was a son of Musaani and member of Bush-bwek (Ngabi) clan. His mother's name was Nansere. He was an expert potter and was appointed by the County chief who greatly admired his work.<br/>
                  After living for a time in the chief's household, Mawaggali became a tenant of Mathias Mulumba Kalemba and built a house on his land. Mulumba was his friend, as well as his landlord, and it was this friendship, as well as the zeal and Christian example of Mathias Mulumba which drew Mawaggali to him and which induced him to join the Catholic Catechumenes.<br/>
                  When he became a Christian he put all his confidence in God. He was baptised on Sunday 31st November, 1885.<br/>
                  When Christian persecution broke out, he was at Miyana (Kiyinda) in Singo county. On that fateful night May, 1886, he was in Banabakintu's house giving instructions to men and discussing with them the news of the arrest of Mathias Mulumba. Soldiers came to Banabakintu who were on their way to the Catholic mission where they had gone to represent Miyana Catholics.<br/>
                  The raiding party then led by Muganga, the royal legate, closed in on the house. Mawaggali was arrested with the rest, thus giving his fellow Christians the chance to escape. Kinyamiti, the King's chief drummer, plunged holes into Mawaggali's body and he was grievously wounded. The wounded martyr was then tied on a Mutuba tree and dogs were set upon him. At nights fall, mangled remains were untied from the tree and left on the road as a warning to other Christians.<br/>
                  He was canonised a saint by Pope Paul VI in 1964.<br/>
                  S.B. Noa Mawaggali is the Patron saint of the Poor, the Technicians and the Artists.
                </p>
              </div>
            </div>
            {/* Background of the School */}
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-full md:w-1/2 order-1 md:order-1">
                <img src="images/school.jpg" alt="School" className="w-full h-64 object-cover rounded-xl shadow-md mb-4 md:mb-0" />
              </div>
              <div className="w-full md:w-1/2 order-2 md:order-2 flex flex-col justify-center">
                <h3 className="font-bold text-primary-600 mb-2 text-xl md:text-2xl text-center md:text-right">Background of the School</h3>
                <p className="text-gray-700 text-sm leading-relaxed text-justify">
                  St. Noa Mawaggali Senior Secondary School Mbikko is a private catholic founded mixed day and boarding school with O and A levels of education. It is located on the main Kampala-Jinja highway road in Njeru town council, Njeru Municipality.<br/>
                  The school was founded in 1993 by the Christians of Njeru-Nile sub-parish in Mbikko parish with the help of Mill Hill missionaries who run the Mbikko parish. It was founded with the aim of enhancing spiritual, moral, intellectual growth and social growth and development as well as uniting the community of the area.<br/>
                  Although it is a catholic founded school, its embraces all the religious practices without exclusion of other denominations for example Moslems, Hindus, Anglicans and Pentecostals all find the school accommodating and very receptive.<br/>
                  Unlike other secondary schools in the region, St. Noa Mawaggali S.S.S Mbikko is a multi-cultural school. Students have very many opportunities to achieve their end goals.<br/>
                  The school has a population of approximately 1100 students out of whom over 60% are girls. With very few exceptions, the age range is from 12 to 20.
                </p>
              </div>
            </div>
            {/* Cards: Motto, Mission, Core Values, Vision */}
            <div className="flex flex-col md:flex-row gap-6 mt-8">
              {cardData.map((card, idx) => (
                <motion.div
                  key={card.title}
                  whileHover={{ scale: 1.03, y: -2, boxShadow: '0 8px 32px 0 rgba(251,191,36,0.15)' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex-1 rounded-2xl bg-primary-600 border border-accent-400 shadow-lg p-6 flex flex-col items-center text-center gap-4 cursor-pointer transition-all duration-300"
                >
                  <h4 className="font-bold text-accent-400 text-xl mb-2 font-display">{card.title}</h4>
                  {Array.isArray(card.content) ? (
                    <ul className="list-none space-y-1 text-white text-base">
                      {card.content.map((val, i) => (
                        <li key={i}>{val}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-white text-base">{card.content}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HistoryPage;