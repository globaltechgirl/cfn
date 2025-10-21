import President1 from "@/assets/president1.webp";
import President2 from "@/assets/president2.webp";
import President3 from "@/assets/president3.webp";
import President4 from "@/assets/president4.jpg";
import President7 from "@/assets/president7.webp";
import President8 from "@/assets/president8.jpg"
import President9 from "@/assets/president9.webp";

export interface President {
  id: number;
  date: string;
  name: string;
  img?: string;
  about: string;
  early: string;
  career: string;
}

export const presidentsData: President[] = [
  {
    id: 0,
    date: "-",
    name: "Hon. Chief Akinpelu Obisesan",
    img: President1,
    about: `
Akinpelu Obisesan (1889–1963) was a prominent Nigerian diarist, businessman, and politician whose life and writings provide valuable insight into the social, cultural, and political history of colonial-era Ibadan and western Nigeria. As part of the educated elite in the early twentieth century, Obisesan was among a select group who meticulously documented their daily experiences and reflections. His diaries, spanning from 1920 to 1960, have become a significant historical resource for scholars studying Nigeria’s colonial period, offering rare first-hand accounts of elite interactions, community affairs, and the evolution of urban society. Through his detailed records, Obisesan chronicled the lives of influential figures such as Salami Agbaje—one of Ibadan’s wealthiest citizens—and shed light on the socio-political issues of his time, including land disputes, community leadership, and the changing dynamics of wealth and influence.
    `,
    early: `
Akinpelu Obisesan was born in Ibadan in 1889 to Aperin Obisesan, a renowned elephant hunter and warrior, and a woman of slave descent. His father played a key role in defending Ibadan during the late nineteenth-century Ijebu incursions and was later honored with a chieftaincy title for his bravery. The elder Obisesan also acquired a vast expanse of forest land, which he developed into a productive cocoa plantation—an inheritance that would later shape Akinpelu’s early career and family responsibilities.
<br/>

Educated under the Church Missionary Society (CMS), Obisesan attended several mission schools where he was influenced by notable Christian educators such as Daniel Olubi, an early convert and his teacher in 1896. Olubi served as both mentor and inspiration, fostering in him a passion for literacy and record-keeping. It is widely believed that his exposure to the missionary culture of journaling and self-documentation encouraged him to begin writing. In 1914, Obisesan purchased his first diary, marking the beginning of a lifelong habit of meticulous documentation that would later immortalize his name in Nigerian historical studies.
    `,
    career: `
Akinpelu Obisesan began his professional journey as a clerk in the office of the British Resident in Ibadan before moving to Lagos to work with the Nigerian Railway Authority. In 1913, he returned to Ibadan to manage his family’s expansive cocoa farms as caretaker and secretary. His role extended beyond family affairs into community leadership, particularly in agricultural and cooperative movements.
<br/>

Over the years, Obisesan became an influential businessman and cooperative leader. He worked with the Paterson Zochonis (PZ) group as a produce buyer and later emerged as a key figure in the cocoa trade. For more than three decades, he served as the president of the Ibadan Cooperative Produce Marketing Society, where he advocated for fair trade practices and challenged exploitative tactics by merchant middlemen and foreign exporters. His leadership extended to banking as the pioneer chairman of the Cooperative Bank of Ibadan, established to support cooperative societies and enhance local economic empowerment.
<br/>

Through his business acumen, civic leadership, and detailed record-keeping, Akinpelu Obisesan left an enduring legacy as one of Ibadan’s most remarkable early modern intellectuals—bridging the world of traditional authority, colonial enterprise, and the emerging educated elite of twentieth-century Nigeria.
    `,
  },
  {
    id: 1,
    date: "-",
    name: "Pastor E. T. Latunde",
    img: President2,
    about: `
Elija Titus Latunde (1905–1983) was a distinguished Nigerian Christian leader, evangelist, educator, and administrator who served as the third President of the Christ Apostolic Church (CAC) Worldwide. Renowned for his deep spirituality, leadership, and dedication to prayer, Latunde played a pivotal role in the expansion and consolidation of the Christ Apostolic Church during the mid-twentieth century. His life’s work combined faith, education, and cooperative enterprise, reflecting a holistic vision of service to God and humanity.
<br />

Under his leadership, the CAC experienced remarkable growth—spiritually, numerically, and institutionally. He championed the establishment of primary schools, the CAC Printing Press, the CAC Youth Fellowship, and the Ordained Ministers’ Wives Fellowship, all of which contributed to the church’s long-term development. Beyond the pulpit, Latunde was a respected figure in Nigeria’s cooperative movement, serving in various leadership capacities that strengthened community enterprise and financial inclusion. Remembered for his humility, discipline, and fervent prayer life, Elija Titus Latunde remains an enduring symbol of faith-driven leadership in Nigeria’s Christian history.
    `,
    early: `
Elija Titus Latunde was born in January 1905 at Ile-Lodi, Moore, Ile-Ife, in present-day Osun State, Nigeria, to Pa Fasanmoye and Madam Fapowopo Eluyo, both traditional idol worshippers. He had two siblings, Alice Omiwara and Samuel Adebanjo. On January 7, 1917, at the age of twelve, he was baptized at St. Philip’s Anglican Church, Ayetoro, Ile-Ife, where he received the name Titus.
<br />

A brilliant student, Latunde began his formal education at All Saints School, Osogbo, in 1922, and later attended Government School, Oranyan, Ibadan (1924–1927). He proceeded to Government Teachers’ Training College, Warri (1928–1929), where his academic excellence earned him recognition and an offer of government employment. However, his educational aspirations were tragically disrupted by a sudden eye defect that struck him on the day of an examination. Despite medical efforts in Lagos and elsewhere, his condition was deemed incurable.
<br />

Refusing to lose faith, Latunde turned to spiritual intervention. After joining the Faith Tabernacle Church in Ibadan, he engaged in intense prayer and fasting, and reportedly regained his sight through divine healing—after washing his eyes in a bowl of blessed water during worship at the house of Oba Akinyele. This miraculous healing marked the beginning of his journey into Christian ministry and spiritual leadership.
    `,
    career: `
Following his healing and spiritual transformation, Elija Titus Latunde dedicated his life to evangelism and ministry. In 1930, he began working as an evangelist under Prophet Ositelu in Ijebu Iremo, Ogun State, and by 1932, he had become a salaried catechist earning one pound and ten shillings per month. In 1935, he was ordained as a pastor in the Christ Apostolic Church, and three years later, he was sent to establish and oversee the church’s mission in Ile-Ife and surrounding towns such as Apomu, Ikoyi, Ikire, Gbongan, and Modakeke.
<br />

Latunde’s impact extended beyond ministry. He was instrumental in advancing education, founding several Christ Apostolic Church primary schools across Ile-Ife and neighboring towns from 1939 onward. He managed these schools until the government takeover of mission schools in 1960.
<br />

Latunde was also a notable figure in Nigeria’s cooperative movement. He held prominent positions — from Vice Chairman (1954) and later Chairman (1963) of the Cooperative Union of Western Nigeria to Treasurer (1965) and later Chairman (1969) of the Cooperative Bank of Western Nigeria and Member of the Central Committee, International Cooperative Alliance (1960–1970). He also served as Chairman of the Cooperative Federation of Nigeria (1965) and on the boards of the Western Nigerian Marketing Board, Western Nigerian Development Corporation, and the Cocoa Research Institute of Nigeria (CRIN).
    `,
  },
  {
    id: 2,
    date: "-",
    name: "Chief J. E. Babatola",
    img: President3,
    about: " He was a business strategist with a vision for long-term cooperative growth.",
    early: " He was a business strategist with a vision for long-term cooperative growth.",
    career: " He was a business strategist with a vision for long-term cooperative growth.",
  },
  {
    id: 3,
    date: "-",
    name: "Chief S. O. Somoye",
    img: President4,
    about: " He was a business strategist with a vision for long-term cooperative growth.",
    early: " He was a business strategist with a vision for long-term cooperative growth.",
    career: " He was a business strategist with a vision for long-term cooperative growth.",
  },
  {
    id: 4,
    date: "1992 - 1996",
    name: "Chief Remi Obisesan",
    img: "",
    about: " He was a business strategist with a vision for long-term cooperative growth.",
    early: " He was a business strategist with a vision for long-term cooperative growth.",
    career: " He was a business strategist with a vision for long-term cooperative growth.",
  },
  {
    id: 5,
    date: "1996 - 1997",
    name: "Chief Richard Iyasere",
    img: "",
    about: `
Mr. Richard Iyasere is a respected community leader, entrepreneur, and civic advocate based in the Greater New York metropolitan area. Originally from Edo State, Nigeria, he has lived in the United States for over two decades, where he has built an impressive career and a legacy of service to both the Nigerian diaspora and the broader African community.
<br />

A man of integrity, compassion, and purpose, Mr. Iyasere is best known for his long-standing commitment to community development, immigrant support, and cultural promotion. He has spent over thirteen years as a key organizing member of the Nigerian Independence Day Parade—New York’s first and longest-running African parade, now in its third decade. His dedication to community service has earned him numerous accolades, including the 2014 Community Leadership Award from 3G Media in New York.
<br />

Fondly known as “Daddy Rich” by family and friends, he has become a symbol of generosity and leadership among Nigerian and African immigrants in New York. Through his professional excellence, entrepreneurial spirit, and civic engagement, Mr. Iyasere continues to inspire and uplift others while contributing to the cultural and social fabric of New York City.
    `,
    early: `
Born and raised in Edo State, Nigeria, Richard Iyasere grew up with a deep appreciation for hard work, education, and community values. Like many ambitious Nigerians, he sought greater opportunities abroad and immigrated to the United States in the early 1990s to pursue education and a better future for himself and his family.
<br />

Upon his arrival, Mr. Iyasere faced the challenges of adapting to a new culture and system. Undeterred, he worked tirelessly to establish himself—achieving a significant milestone by owning his first property just six years after arriving in the country. Understanding firsthand the struggles many new immigrants experience, he made it a personal mission to assist others by offering accommodation, mentorship, and support as they settled into life in America.
<br />

His compassion and unwavering commitment to helping others earned him the affectionate nickname “Daddy Rich”, a testament to the fatherly role he has played in the lives of countless individuals in his community.
    `,
    career: `
Professionally, Mr. Iyasere is an accomplished System Safety Specialist with the Metropolitan Transit Authority (MTA) in New York. He earned his Bachelor of Science degree in Environmental Science from the City University of New York (CUNY), where he built a strong foundation in safety, environmental responsibility, and system management. His role at the MTA reflects his dedication to ensuring public safety and operational excellence in one of the nation’s largest transportation networks.
<br />

Beyond his professional career, Mr. Iyasere is a passionate community advocate with a strong record of civic involvement. He has served in numerous leadership and advisory roles — from Member, Community Board 1 (New York City) to District 17 Round Table Member, New York City Council and Community Liaison, African Advisory Council of the Bronx (under former Borough President Ruben Diaz Jr.). He also served as Vice President, Nigerian Unique Club of New York and President, African Club, Bronx Community College
<br />

Mr. Iyasere is a successful entrepreneur and entertainment promoter. As the founder of DaddyRich Productions, he has organized numerous concerts and cultural events, bringing renowned artists and musicians from across the world—especially Africa—to perform in New York City. Through this venture, he continues to promote African music and culture while fostering cross-cultural exchange within the city’s diverse population.
    `,
  },
  {
    id: 6,
    date: "1997 - 2009",
    name: "Sir Adeola Ayoola",
    img: President7,
    about: `
Sir Clement Adeola Ayoola was a distinguished Nigerian cooperative leader, devout Catholic, and humanitarian whose life embodied service, integrity, and commitment to community development. A pillar of the cooperative movement in Nigeria, Sir Ayoola’s tireless efforts advanced cooperative principles at local, national, and international levels. Renowned for his humility, generosity, and unwavering faith, he dedicated his life to empowering the downtrodden and improving the lives of the less privileged.
<br />

Until his passing at the age of 83, Sir Ayoola remained an active participant in both ecclesiastical and cooperative affairs. His leadership, wisdom, and dedication earned him numerous awards and the prestigious Papal Knighthood of St. Gregory the Great, conferred by His Holiness Pope John Paul II. His legacy of service continues to inspire generations of cooperators, church members, and leaders across Nigeria and beyond.
    `,
    early: `
Born on October 10, 1938, in Efon Alaaye, Ekiti State, Sir Clement Adeola Ayoola hailed from the Obaloja family, a chieftaincy lineage ranking third to the Alaaye of Efon Alaaye. His father, Pa Samuel Ayoola, was a dedicated farmer, while his mother, Madam Julianah Ayoola, came from Ikoyi in Oyo State, descending from a family of renowned warriors.
<br />

Despite early life challenges, including financial hardship and fragile health, Sir Ayoola’s determination for formal education set him apart from his peers. He began his education at St. Paul’s Anglican School and later continued in Oro, Kwara State, under the guardianship of his uncle, Mr. Joseph Oni. His perseverance and thirst for knowledge became defining traits that shaped his future leadership and humanitarian achievements.
    `,
    career: `
Sir Ayoola began his professional journey in 1956 as a clerk at the Ministry of Works, Akure, before training as a Pharmacist Assistant at St. Louis Combined Hospital, Owo, Ondo State, in 1957. His passion for human development led him into the cooperative sector, where he found his true calling.
<br />

Sir Ayoola’s leadership journey saw him rise through various capacities within the movement — from President of Ayede Ekiti Cooperative Investment and Credit Union (CICU) to President of the Ondo State Cooperative Federation and President of the Nigerian Agricultural Cooperative Marketing Organisation Ltd. He also served as Chairman of Coop Cocoa Products Ltd, Akure, and Chairman of the Board of the defunct Cooperative Bank Ltd, which later evolved into Skye Bank Plc (now Polaris Bank).
<br />

Beyond the cooperative sphere, Sir Ayoola was deeply involved in community and ecclesiastical leadership. He served as President of the Catholic Laity Council of Nigeria, Chairman of St. Benedict’s Pastoral Council, and President of the Efon Alaaye Catholic Association of Nigeria. For his extraordinary contributions to the Church, he was awarded the Papal Knighthood of St. Gregory the Great.
<br />

Throughout his career, Sir Ayoola received numerous honors, including the Golden Jubilee Award of Cooperative in Nigeria, Ekiti Parapo Award, and multiple state and organizational recognitions for his selfless service. His remarkable contributions to the cooperative movement, the Church, and society at large remain a lasting testament to a life well-lived — one dedicated to service, faith, and humanity.
    `,
  },
  {
    id: 7,
    date: "2009 - 2017",
    name: "Engr. Jibrin Bala Abuja",
    img: President8,
    about: " He was a business strategist with a vision for long-term cooperative growth.",
    early: " He was a business strategist with a vision for long-term cooperative growth.",
    career: " He was a business strategist with a vision for long-term cooperative growth.",
  },
  {
    id: 8,
    date: "2017 till date",
    name: "High Chief Oriyomi Ayeola",
    img: President9,
    about: `
High Chief Ayeola Tajudeen Oriyomi is a distinguished Nigerian cooperative leader, development advocate, and community builder with over 27 years of exemplary service in strengthening the cooperative movement at local, national, and international levels.
<br />

He currently serves as the President of the International Cooperative Alliance–Africa (ICA-Africa), where he provides visionary leadership to promote cooperative enterprises as vital tools for socio-economic development, financial inclusion, and sustainable livelihoods across the continent. High Chief Ayeola is also the President of the Cooperative Federation of Nigeria (CFN) — the apex body for cooperative organizations in the country — through which he has successfully repositioned cooperatives as essential partners in national growth and poverty alleviation.
<br />

Renowned for his strategic insight, integrity, and dedication to grassroots empowerment, High Chief Ayeola has led initiatives that have enhanced the visibility, governance, and impact of cooperatives in Nigeria and Africa at large. His leadership continues to inspire innovation, inclusion, and collaboration within the global cooperative movement.
    `,
    early: `
High Chief Ayeola Tajudeen Oriyomi was born and raised in Nigeria, where he developed a deep sense of service, leadership, and community responsibility from an early age. Guided by a strong educational foundation, he pursued a National Certificate in Education (NCE) and later obtained a Bachelor’s Degree in Economics Education, combining academic excellence with a passion for human and community development.
<br />

His background as an educator instilled in him a lifelong belief in knowledge-sharing, teamwork, and empowerment — values that would later define his outstanding leadership in the cooperative sector. High Chief Ayeola began his professional journey in 1993 when he joined the Lagos State Civil Service as a teacher of Economics and Mathematics, where he mentored countless students and honed his administrative and leadership skills.
    `,
    career: `
High Chief Ayeola’s remarkable career in the cooperative movement spans over two decades of consistent leadership, reform, and advocacy. His ascent through the ranks is a testament to his dedication, innovation, and passion for cooperative enterprise as a tool for inclusive economic growth.
<br />

He has presided over all four tiers of Cooperative Administration in Nigeria, demonstrating an unmatched understanding of the cooperative system from the grassroots to the national level. Between 2012 and 2020, he served two consecutive terms as President of the Lagos State Cooperative Federation (LASCOFED), where he introduced reforms that strengthened governance, promoted youth and women inclusion, and ensured financial sustainability across cooperative institutions.
<br />

In October 2021, High Chief Ayeola was elected President of ICA-Africa at the Regional Assembly, marking a new chapter in his leadership journey. Under his stewardship, ICA-Africa has made remarkable strides in promoting agricultural value chains through the production and sales of Coop Foods, expanding cooperative involvement in healthcare schemes, and advancing the real estate sector with the construction of a modern Secretariat for a State Cooperative Movement.
<br />

At the national level, as President of the Cooperative Federation of Nigeria, he has driven transformative partnerships between CFN and the Federal Government of Nigeria, notably in the provision of social housing through cooperative societies. His visionary leadership has significantly increased the visibility, dynamism, and credibility of Nigeria’s cooperative movement both domestically and globally.
<br />

Beyond his cooperative engagements, High Chief Ayeola serves on the Board of Cooperative Mortgage Bank Ltd, Nigeria, where he chairs the Cooperative Development Committee, and is also a board member of Coop Holding Ltd. His influence extends into professional and civic circles as a Fellow of the Institute of Professional Managers and Administrators of Nigeria, an Honorary Fellow of the Institute of Cooperative Professionals of Nigeria (ICOPRON), and Patron of the Association of Nigerian Authors (Lagos Chapter).
<br />

Through his visionary leadership and unwavering dedication, High Chief Ayeola Tajudeen Oriyomi continues to champion the cooperative ideal — building institutions that foster shared prosperity, inclusion, and sustainable development across Africa.
    `,
  },
];
