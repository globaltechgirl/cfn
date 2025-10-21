import CFNLogo from "@/assets/cfn.svg";
import Media1 from "@/assets/media1.jpg";
import Media2 from "@/assets/media2.jpg";
import Media3 from "@/assets/media3.jpg";
import Media4 from "@/assets/media4.jpg";
import Media5 from "@/assets/media5.jpg";
import Media6 from "@/assets/media6.jpg";
import Media7 from "@/assets/media7.jpg";
import Media8 from "@/assets/media8.webp";
import Media9 from "@/assets/media9.jpg";
import Media10 from "@/assets/media10.jpg";

export interface MediaItem {
  id: number;
  img: string;
  wallpaper: string;
  time: string;
  title: string;
  label: string;
  clock: string;
  text: string;
}

const computeReadingTime = (title: string, text: string): string => {
  let fullText = `${title} ${text}`;

  fullText = fullText.replace(/([.!?])([^\s])/g, "$1 $2");

  const words = fullText.match(/\w+/g) || [];
  
  const wordCount = words.length;
  const minutes = Math.ceil(wordCount / 200);

  return `${minutes} min read`;
};

export const mediaData: MediaItem[] = [
  {
    id: 1,
    img: CFNLogo,
    wallpaper: Media1,
    time: "2 SEP. 2019",
    title: 
      "CFN Members",
    label: "Communique",
    text: `
**NORTH–CENTRAL ZONE**

**S/N  NAMES OF MEMBERS**

1. Abuja Cooperative Federation Ltd (ABCOF)

2. Benue State Cooperative Federation Ltd

3. Kogi State Cooperative Federation Ltd

4. Kwara State Cooperative Federation Ltd

5. Nassarawa State Cooperative Federation Ltd

6. Niger State Cooperative Federation Ltd

7. Niger State NUT Endwell Cooperative Union Ltd. Minna

8. Plateau State Cooperative Federation Ltd<br />

**NORTH–EAST ZONE**

**S/N  NAMES OF MEMBERS**

1. Adamawa State Cooperative Federation Ltd

2. Bauchi Cooperative Financing Agency

3. Bauchi State Cooperative Federation Ltd

4. Borno State Cooperative Federation Ltd

5. Gombe Cooperative Financing Agency

6. Gombe State Cooperative Federation Ltd

7. Taraba State Cooperative Federation Ltd

8. University Staff Sangere M/P Cooperative Society Ltd. Yola

9. Yobe State Cooperative Federation Ltd<br />

**NORTH–WEST ZONE**

**S/N  NAMES OF MEMBERS**

1. Jigawa State Cooperative Federation Ltd

2. Kanduna State Cooperative Federation Ltd

3. Kano State Cooperative Federation Ltd

4. Kastina State Cooperative Federation Ltd

5. Kebbi State Cooperative Federation Ltd

6. Sokoto State Cooperative Federation Ltd

7. Zamfara State Cooperative Federation Ltd<br />

**SOUTH–EAST ZONE**

**S/N  NAMES OF MEMBERS**

1. Abia State Cooperative Federation Ltd

2. Cooperative Federation of Anambra State

3. Cooperative Federation of Imo State

4. Ebonyi State Cooperative Federation Ltd

5. Enugu State Cooperative Federation Ltd<br />

**SOUTH–SOUTH ZONE**

**S/N  NAMES OF MEMBERS**

1. Akwa Ibom State Cooperative Federation 

2. Bayelsa State Cooperative Federation Ltd

3. Cross River State Cooperative Federation Ltd

4. Delta State Cooperative Federation Ltd

5. Edo State Cooperative Federation Ltd

6. River State Cooperative Federation Ltd<br />

**SOUTH WEST ZONES**

**S/N  NAMES OF MEMBERS**

1. Federation of Ekiti State Cooperatives Ltd (FESCOOP)

2. Federation of Osun State Cooperatives Ltd (FOSCOOP)

3. Lagos State Cooperative Federation Ltd (LASCOFED)

4. Ogun State Cooperative Federation Ltd (OGSCOFED)

5. Ondo State Cooperative Federation Ltd (ODCOFED)

6. Oyo State Cooperative Federation Ltd (OYSCOFED)<br />

**NATIONAL APEXES**

**S/N  NAMES OF MEMBERS**

1. Cooperative Financing Agency of Nigeria (CFAN)

2. Nigeria Cooperative Women Alliance (NICOWA)<br />

**NATIONAL PRIMARY COOPERATIVE SOCIETIES**

**S/N  NAMES OF MEMBERS**

1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; NNPC Cooperative Multipurpose Society Ltd. Lagos

2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nigeria Police Cooperative Multipurpose Society Ltd
    `,
    clock: "",
  },
  {
    id: 2,
    img: CFNLogo,
    wallpaper: Media2,
    time: "15 AUG. 2018",
    title: 
      "CFN executive secretary’s report to CFN board of directors’ meeting held in Abuja on 15th August, 2018",
    label: "Communique",
    text: `
1. **Introduction:** This report highlights the programmes/activities undertaken by CFN from March 2018 to date, and outlines ongoing and future activities.

2. **An Act to Amend the Nigerian Co-operative Societies Act CAP98 2004 Laws of the Federation of Nigeria (LFN):** A Public Hearing was organized by the House Committee on Agriculture, Colleges and Institutions at the National Assembly. CFN President and led the Co-operative Movement to the event even though CFN did not receive an official invitation to the occasion, on May 8th 2018. The Federal Department of Co-operatives was also at the Public Hearing. At the end of deliberations it was the agreed that an entire review of the Act was needed and not just amendments. An Ad-hoc Committee of Seven with CFN President as Chairman was set up to steer the process of producing a draft amended bill to enact the Nigeria Co-operative Societies Act CAP98 2004 LFN. The draft has been submitted to the Committee and is ready to go to for 3rd reading. CFN is to lead advocacy and mobilise funds to finance activities leading to the passage of the bill.   

3. **4th CFN Summit 2018:**  The CFN President, Chief Oriyomi Ayeola, accompanied by CFN ES, two members of the Board of Lagos State Co-operative Federation (LASCOFED), the latter’s ES, and CFN Accounts/Administrative Officer, as well as the President of Ogun State Co-operative Federation with some of his Board members paid a very  successful courtesy visit to Ogun State Hon. Commissioner of Community Development and Co-operatives in Abeokuta on 6th June 2018. The purpose was to intimate the Hon. Commissioner about CFN’s intention to hold the 4th CFN Summit 2018 in Ogun State. Consequently CFN has submitted a letter to the Hon. Commissioner to facilitate a courtesy visit to His Excellency, the Executive Governor of Ogun State.

4. **7th Regular National Council on Co-operative Affairs (NCCAs):** The  7th NCCA held in Gombe from 1st-4th August 2018. Directors of Co-operatives from 14 States, some Permanent Secretaries, and five Hon. Commissioners  of Co-operatives, representatives of  Hon. Minister of Agriculture and Rural Development, and the Permanent Secretary of the Ministry, attended the event. The Co-operative Movement was represented by only CFN, and President of National Co-operative Insurance Society of Nigeria, and the President of the National Union of Agricultural Production co-operatives. It  is therefore, important for CFN to press for the urgent re-constitution of the National Co-operative Advisory Board (NCAB) to provide a platform for the Co-operative Movement to discuss challenges facing co-operatives in the country.     

- **CFN Proposed 2018 Budget:** A proposed expenditure of N6, 863, 200.00 against a projected income of N7,800,000.00 is presented before the Board. This budget is coming in the eight month of the year due to the slow start which we have had to deal with. However some expenses have to be covered such as staff salaries, letterhead papers, and so on. I  therefore, appeal to the Board to consider the proposed budget passionately, and not only approve it but support its workability by ensuring timely fulfillment of CFN Affiliates’ financial obligations to the CFN.

- **Staff Matters:** There was a backlog of salary arrears. However, a line had to be drawn between the past and present so as to move forward. The CFN President who doubles as LASCOFED’s President, and his ES, were magnanimous in advancing funds towards CFN Staff salaries for six months, starting from January to June 2018, which is the terminal date for the financial advance.

- The focus now is on how to sustain the monthly salary bill of N103,600.00 for the remaining six months, while at the same time paying back the total amount of N430,000.00 being advance by LASCOFED in salaries to CFN from January 2018 to June 2018. 

- Last year the ES gave a notice of retirement on account of retirement age. However, the CWC prevailed on the ES to defer his retirement because of the CFN 2017 congress. Now that a new CFN leadership is in place it is pertinent for the Board to initiate the process of retirement of the ES to enable him proceed on retirement leave either from October 20018 or January 2019.

- **CFN Office Accommodation at AP Infinity House Abuja:** In July 2018 CFN made a move through an official letter to the Managing Director of Africa Prudential Plc to start the process of taking possession of the office. In response, AP authorities submitted to the CFN a total Annual bill of over Three Million Naira. A follow up by the CFN President about this bill could not change matters. Therefore CFN no longer has claim over this office.

- **Retreat for CFN Board:** The proposed CFN Board retreat aims fostering mutual understanding and harmonious working relationships amongst Board members, besides sharpening the skills of the Board towards enhanced performance. It is expected this activity will still be organized before the end of the year.

- **ICA Global and ICA Africa  Programmes:** The ICA global 2018 General Assembly holds in Buenos Aires Argentina from 18th to 22nd October 2018. 9.1 ACMC 2018/13th ICA Africa Regional Assembly. The Africa Co-operative Ministerial Conference is scheduled to hold at NICON Luxury, Hotel Area 11, Abuja, from 3rd -7th September 2018. Nigeria’s host Minister, Hon. Minister of Agriculture and Rural Development Chief Audu Ogbe, OFR will be taking over the Chairmanship of the ACMC from his counterpart from Botswana. All Ministers of Co-operatives in Africa are expected to be in attendance. The theme of the conference is: “Leveraging the Co-operative Advantage for the Africa Free Trade Area.” CFN is required to sttle its ICA 2018 dues to the tune of approximately N2,600,000.00(N2, 553,000.00 in 2017). It is hereby proposed that this amount be shared equitably among the six CFN Zones, and to be paid before the ACMC starts on 2nd September 2018.

- **ICA 2018 International Co-operative Day, Kano, 2018:** CFN has taking steps in partnership with an Event Managing Company IMPC Limited to mark this year’s International Co-operative Day in Kano. The activity will be organized in collaboration with the State Co-operative Federation. The earlier date of  August 2018 has had to be shifted, and September 21st-22nd 2018.

- **13th ICA Africa Regional Assembly:** The 13th ICA Africa Regional Assembly will hold during the ACMC. Highlights will be a bye-election to elect a new President/International Vice President of the ICA Africa, Vice President, and a Board member. This follows the retirement of Mr. Stanley Muchiri, ICA International Vice President Africa at the event. Also a Farewell party is expected to be organized for him during the ACMC.

- **Constitution of CFN CWC:** CFN Zonal Coordinators (ZCs) are nominated one each from the six geo-political Zones, including those zones from which CFN’s four officers, President, 1st and 2nd VPs, and Treasurer, have been elected. Zonal ZCs for North Central (NC), National Sectorial Apexes (NSA), South West (SW), and South South (SS) have been ratified by the Board. North East, North West, and South East are, however, yet to have nominations for Board’s ratification. The Secretariat craves the support of neighboring ZCs in ensuring that every Zone is represented on the CWC before or at the next meeting of the Board. It is a greater challenge getting nominations to represent women and youths respectively on the CWC, since the Nigeria Co-operative Women Alliance (NICOWA) leadership crisis deteriorated in the last three years. As for youths, the absence of a reliable youth network  that reflects co-operative values and principles, and works with the Co-operative Movement either at National or State level presents another challenge.

- **Conclusion:** It has been with the co-operation and support of some CFN Affiliates that the foregoing activities have been carried. We wish to appeal  to all CFN Affiliates to continue to support CFN activities so that together the Co-operative Movement in the country will make their inputs in the socio-economic development of the country.
    `,
    clock: "",
  },
  {
    id: 3,
    img: CFNLogo,
    wallpaper: Media3,
    time: "21 FEB. 2018",
    title: 
      "Report of executive secretary Co-operative Federation of Nigeria (CFN) to the CFN meeting held in Abuja on 21 February, 2018",
    label: "Communique",
    text: `
**Introduction:** This is a report of CFN programmes/activates from 5th CFN Congress, Minna, 6-7 November 2017 to 20th February 2018. The report gives a highlight of 5th CFN congress, CFN 2018 work plan/budget, office accommodation, and staff matters, funding CFN programmes (Board/CWC/ICA Meetings, advocacy/lobby Visitsetc), Gombe/North center Zonal consultative forum, and ICA Africa co-operative Development Strategy, Morocco (2017-2020).
<br />

- **5th CFN Congress, Minna, 6-7 November 2017:**  This was about the best of congresses organized by CFN in Port Harcourt 2000, Bauchi 2005, Ado- Ekitti 2009, and Minna , 2014, especially given the background of the severe Financial and time constraints under which it was organized.

- **Pre-congress Workshop:** In the interim report showed 425 participant registered for the pre-congress workshop, specific thanks to the efforts of host Niger State, and Lagos, but also all other States to provide by the host, and the personal presence of the Niger State Governor. Dr. Abubakar Bello, coupled with the attendance of the Federal Director of Co-operatives and his team, as well as Chief Mrs. E. Adoyomi, Chairperson Board of Directors of AP Plc, Lagos and other Board members of the organization, not to talk of the guest speaker Dr. Chiyogesifa, the Alliance Africa Regional Director, and the MD/CEO of AP Plc, one of the speakers at the congress will be submitted after CFN Secretariat and LOC Chairman immediately after the congress gave an income of about N6million while income was about the narrative and Financial report.

- **Election:** Election were conducted in strict compliance with CFN Bye-Laws, specifically with reference CFN Bye-Law 12 which subject member privilege on prior discharge of a member’s financial obligations to the CFN.
<br />

Consequently, only 11(eleven) affiliates, made up of eight (8) State Federations, and three other co-operatives, two special primary co-operative societies and one State Sectorial Apex. Members appointed Mrs. Oguntuyi and Malamidris,deputy Directors in Federal department of co-operatives to the congress as Returning Officers, they were assisted by CFN ES. The result of the election are follow: Mr. Tajudeen Oriyomi Ayeola, President, C omrade Labarn Garba, 1st Vice President, 2nd Vice President, High Chief Ebikir Akpolo and Hijia Hadiza Hassan Danga as Treasurer. About one week after the congress a letter of complaint was sent to HMARD Chief Audu Ogbe, CON. Following due consultations CFN thought it wise to respond to the complaint due to the spurious, and baselessness of the allegations contained in the letter. CFN heard no further development about this complaint so far.

- **Constitution of CFN Zonal Coordinators:** The General Meeting resolved among other things that henceforth one Zonal Condinator should be nominated from each of the six CFN Zones. Including those zones from which CFN four officers, President, first, second VP, and Treasure, have been elected. The Board is expected to deliberate on these nominations at this Meeting, in order to facilitate the constitution of the central working committee (CWC).

- **CFN 2018 Work Plan:** Components of the work plan are: CFN 2018 Roadmap which is broken down into programmes/ Activates in the template.
<br />

**ANNEXA:** Highlights of the work plan are stated below:

- **Retreat For CFN Board:** This Activity will to a large extent, smoothen the harmonious functioning, and sharpen the skills of the new Board leading to mutual understanding, and shared learning needed to achieve CFN collective goals and aspirations. Above all, if the experience of the immediate past board is anything to go by, it is imperative to organize this event. It is also suggested that careful selection of Executive members or Presidents of specialized co-operatives, unions, and primary societies be invited to participant in the purposed retreat.

- **4th CFN Summit 2018:** The first co-op summit was held in Abuja in 1996, the second “attempt” was in Abuja while the 3rd was hosted by Imo Co-operative federation in 2018.
<br />

**Highlighted of this summit include:** 

1. Organize a CFN Extra- Ordinary General Meeting to adopt CFN Draft Amendment Bye-Laws for submission to the federal department of co-operatives for endorsements.

2. Organize a CFN Members Forum with a view to producing a CFN strategic plan (2018-2020).

3.  Unveil Nigeria top 300 co-operatives which is a profile of the biggest in business terms, co-operatives in line with ICA Global 300.

4.  Hold a summit grand finale on the ICA/UN 2018 International co-operative day theme or as Board deems fit.

5. **Budget:** The budget component of the work plan has some setbacks, one of which is the fact that the CWC having not been formed yet either mandate the CWC to scrutinize the Budget for submission to the Board next meeting, not later than early April 2018 or authorize the CWC to be formed to adopt the budget on behalf of the Board.

6. **Staff Matters. Currently there are only two, the ES and the Accounts/Administrative Officer:** The main issues under here include: a backlog of salary arrears and measures for ensuring regular payment of salaries.

7. A salary review is due now at a time the Federal Government is reviewing the wages of Federal Civil Servants. Since 2010 CFN staff members have not enjoyed any salary increase or promotion since 1998.

8. Last year the ES gave a notice of retirement on account of retirement age. However, the CWC, un view of the CFN 2017 congress, coupled with the imminent CFN leadership transition, prevailed on the ES to defer his decision to go on retirement so as to facilitate a smooth transition of leadership. With the new leadership in place now it is pertinent for the Board, as a matter of urgency to initiate a succession plan to enable the ES proceed on retirement as soon as possible.

9. At the same time, it is very important to hire, at least two staff, one qualified and experienced Secretary, and a programme officer to strengthen the capacity of the secretariat to bring about the changes required to add value to affiliates and co-operatives in the country in general.

10. Consequent upon the adoption of the CFN strategic framework later in 2018 it will become necessary to adopt a new CFN Staff condition of service.

- **CFN Office Accommodation:** I have the pleasure to report, and we should thank LASCOFED Ltd, for giving CFN, on gratis, an office space that measured 16.5 meters in ogba Lagos. I resumed work with my colleague, the Accounts/Administration Officers, at the Lagos office on the 9th January 2018. This followed the nod given by the Board at its inaugural meeting held in Abuja on 14 December 2018 to the CFN President to his request to approach the Board of LASCOFED for an office space to serve as a branch office for CFN in Abuja in principle already in view. what remains is how to both partition and furnish these two offices with furniture, file cabinets, window blinds and air conditioning systems.

- **North East, North Central, consultative forum, Gombe, 6 February 2018:** The Federal Department of Co-operatives organized a forum for Presidents of State Federations, including State Directors of Co-operative from North Central and north east geo-political zones of the country. CFN was represented at the forum by the CFN Treasure, Hajia Hadiza Danga, who also presented a CFN Paper on, “The role of CFN in the promotion of linkages and co-operative entrepreneurship development in Nigeria. The   Treasurer is expected to give a brief report of this forum.

- **ICA/ICA Africa Programmes:** The ICA global elected a new President at its General Assemble / International conference held in Kaula Lumpur, Malaysia on 13-17 November, 2017. He is Mr. Former CEO of CICOPA, (ICA Sectorial organization for artisanal and Industry cooperatives), as its new director- General. Both the ICA President and DG have resumed duties. Meanwhile, Mr. Stanley Muchiri, of Kenya Cooperative Alliance remains the ICA International Vice President, Africa. The ICA has released the theme of the 2018 International Cooperative Day. The theme is: to be celebrated on first Saturday of 7th July, 2018 all over the world. in addition, ICA African has extended a formal invitation to CFN to the Ministerial Cooperative Technical Committee (MCTC) schedule for Maputo, Mozambigue, southern African (not south African), may 2018. A workshop for co-operative leaders/ managers and directors to hold before the MCTC on 28th May 2018.   
<br />

Board members are encouraging to participate and sensitize State directors in their respective States to participate. The MCTC prepares reports to be presented to the Africa co-operative Ministerial conference (ACMC) to be held sometimes in October 2018. In addition, ICA African has written to the Hon. Minister of Agriculture and Rural Development requesting him to host the event. It is believed that this requests receiving attention. Last but not the least is the ICA African co-operative development strategy morocco (2017-2020). This frame work is the output of research on co-operative development challenges facing the co-operative movements of African, Nigeria inclusive, the Board is therefore enjoined to consider the adaptation of this strategy frame work CFN Programmes/ activates, as well as adaptation by states for diligent implement towards the development of cooperative entrepreneurship in the country.
<br />

**Conclusion:** The foregoing is a combination of reports of activates from CFN congress held in Minna, 6-7 November 2017, and a synopsis of CFN 2018 work plan, details of which are provided in the CFN 2018 work plan template.
    `,
    clock: "",
  },
  {
    id: 4,
    img: CFNLogo,
    wallpaper: Media4,
    time: "6 NOV. 2017",
    title:
      "Speech by CFN president Eng. Jibrin Bala Abuja at the opening ceremony of a pre-congress workshop on “inclusion: co-operatives ensure no one is left behind”, holding at justice Kutigi International Centre, Minna, Niger state on 6th November, 2017",
    label: "Communique",
    text: `
**Protocol**

I am most grateful to Allah, and I feel very delighted to address you for the last time in my capacity as President of Co-operative Federation of Nigeria (CFN), on this August occasion.

This workshop is organized in recognition of the importanc4e of co-operative education and training precedes CFN congress tomorrow. We cannot overemphasize the need for training and capacity building as a means of empowering co-operative members, elected officers, employees, and even government that is changing very fast, and so we must adapt to the changes in the environment, if we are to be competitive in the global area.

Within the eight short years that In have been on the helm of affairs of CFN, I have had many opportunities to learn, and I continue t lean, from conferences, seminars and workshops, organized by the Alliance Africa. I do not consider such forums as a waste of time or talk shops, but rare opportunities to learn from others, and share my ideas with my counterparts from other co-operatives, and countries from across Africa and beyond.

I therefore, congratulate every participant to this workshop, and urge all of you to make the most of the opportunity which this workshop offers.

The 5th Principle of Co-operatives is “Education, Information”, and Training”. In my years as President of CFN, and Vice Chairman ICA African Regional Board, I have discovered that most Co-operative members and even some leaders are uninformed about the application of co-operative principles and values.

Mr. Chairman, Ladies and Gentlemen, Co-operative enterprises provide unique opportunities for helping to create jobs and provide employment for the growing members of the unemployed, especially women and youths. In Nigeria today, credit co-operatives are providing opportunities for millions for members to save and take loans from their co-operative societies. Also, through co-operatives thousands of cooperative members are able to build houses. Without co-operatives many people in Nigeria today would be completely excluded from the socio- economic development of the country.

It has been reported that there are about 10 millions individual co-operative members in Nigeria, and this translates to about, 40 million people.

I will not end this speech without expressing my gratitude to the Executive Governor of Niger State, His Excellency, Alhaji (Dr.) Abubakar Sani Bello for his supportive role played by Him as Honourable Commissioner Ministry, of Investment and Co-operatives, when I expressed the desire to contest for the presidency of CFN in 2009. It is equally gratifying to see him rise to become the Executive Governor at the time of my exit as CFN President. Mr. Governor is evidently a lover of co-operatives. Only in February 2017, Niger State hosted the National Council on Co-operative Affairs (NCCA); and today, we are here again for the CFN congress.

Ladies and gentlemen, I must say that I have been surrounded by people without whose support and cooperation I may not have successfully completed the two terms of my eight years as CFN President, Dr. Chiyoge B. Sifa, Regional Director of the Alliance Africa is one of such people. Her passion, commitment and dedication to the Cooperative Movement in Africa, Nigeria in particular, is exemplary. Time would fail me to talk of the great support from Africa Prudential Plc, not only to me but to the entire Co-operative Movement of Nigeria. AP Plc. has developed software that supports co-operative management.

In conclusion, I wish to use this opportunity to call on government to ensure the diligent implementation of the Co-operative Development Policy for Nigeria, with a view to taking advantage of the co-operative values, and principles, especially the value of non-discrimination on the basis of tribe, race gender, political affiliation, or social standing. On one hand, governments, at Federal and State levels, have made policies, however, implementation lacks energy. For example the Co-operative Development Fund that should have facilitated access by co-operatives to credit is yet to be established since 2002 when the current policy was inaugurated. State Governments on their part should ensure the setting up of State Co-operative Advisory Boards, and State Council on Co-operative Affairs. This will invigorate the diligent implementation of the policy, boost job creation and employment generation, and reduce poverty in the country.

Mr. Chairman, Ladies and Gentlemen thank you for your kind attention.
    `,
    clock: "",
  },
  {
    id: 5,
    img: CFNLogo,
    wallpaper: Media5,
    time: "6 Nov. 2017",
    title: 
      "Opening address by the permanent secretary, Alh. Uthman Umar, Niger state ministry of investment, commerce and industry at the CFN 5th congress and national workshop on “inclusion  – cooperatives ensure that no one is left behind” holding in Minna from 6th – 7th November 2017",
    label: "Communique",
    text: `
**Protocol**

It is my pleasure to welcome you all to this epoch making event which is the 5th Congress and National Workshop on “Inclusion: Cooperatives Ensure that No One is Left Behind” holding here today in Minna, Niger State.

The theme of this gathering is no doubt the total summation of cooperative movement, its mission and vision. The struggles and total determination to succeed together is among the cardinal objectives of any cooperative organization throughout the world.

The emergence of modern cooperative in Great Britain in1844 is the result of a collective endeavor to face the challenges of economic hardship partly brought about by the unfortunate consequences of the First World War. It was then that people discovered and reasoned that, for the poor people to survive, they had to strive together without leaving anyone out.

The Cooperative Federation of Nigeria deserves a pat on the back for its determination and commitment to the sustainable development of the cooperative movement in Nigeria. With full confidence, I want to state here for the information of everyone present, that Niger State has long identified the importance of the Cooperative movement and will not relent in its effort to move it to the next level.

Coming from the background of societies for only the unfortunate members of the society to the level of informed membership as can be seen from the size and capital outlay of the Civil Servant Cooperative Societies now existing in the state, socio-economic development of our state and nation.

May I also seize this opportunity on behalf of the government and people of Niger State to express our gratitude to the Cooperative Federation of Nigeria (CFN) for the confidence reposed in us through the rare privilege of hosting this event, the second in the series within the year and to assure you of our readiness to always contribute our quota to the development of cooperative movement in the country.

For those coming to the state for the first time, I invite you to savor every moment with utmost joy as Niger State has a lot to offer in terms of rich and diverse culture and hospitality. However, not minding the warmth and security advantages enjoyed by the state, I implore you to be security conscious and to seek the services of the event organizers and hosts on any issue that creates doubts in your minds.

May I at this juncture intimate you about the commitment of the administration of His Excellency, Alh. (Dr.) Abubakar Sani Bello the Executive Governor of Niger State to improve the socio-economic status of the state. In realization of the significant roles that the cooperative movement plays in the aspiration, the Executive Governor has taken commendable steps towards promoting the cooperative strategy in the implementation of government intervention initiatives like the CBN-MSMEDF, Farmers Anchor Borrower Scheme, etc.

It may also please you to note that Niger State Government had long keyed into the CODAS System and embarked upon the recertification of registered societies towards making the subsector meet modern demands of economic development.

One other commendable effort of this administration towards cooperative development is the establishment of the Niger Cooperative Financing Agency, the significance of which you all are aware.

Time will not permit me to exhaust the list, but kindly permit me to commend the effort of the present administration in renovating the Cooperative Department Headquarter in Minna for the very first time ever since the construction of the facility

With these few remarks, I wish to declare the congress open and wish you happy and fruitful deliberations.

Thank you.
    `,
    clock: "",
  },
  {
    id: 6,
    img: CFNLogo,
    wallpaper: Media6,
    time: "24 NOV. 2015",
    title:
      "The communique issued by participants at the Cooperative Federation of Nigeria workshop/annual general meeting held at the Hills Station Hotel Jos, Plateau state on 24th -25th November 2015",
    label: "Communique",
    text: `
The National Workshop/Annual General meeting was organized by the Co-operative Federation of Nigeria (PLASCOFED) with the theme: ‘Securing reliable co-operative capital for Enhance Job creation and Employment in Nigeria; challenges and prospects;
<br />

**ATTENDANCE**

The workshop/Annual General Meeting recorded impressive participation from National and State Apexes across Nigeria, various cooperative societies, stakeholder’s associations development partners and the government. the welcome address was presented by the President of PLASCOFED, Mr. Shamee Jos presented an address. Mr. Emmanuel Atama, Executive Secretary of Ntional Cooperative Financing Agency of Nigeria (CFAN) presented the goodwill message.

His Excellency, the Executive Governor of Plateau State, RT, Hon. Simon Bako Lalong ably represented by the deputy Governor, prof. Soni Tyoden Declared the occasion opened. The Governor among others pledged the State Governor Movement in Nigeria by taking our call for support to the Governors forum of Nigeria and for Plateau State in Particular, Government forum of Nigeria and for Plateau State in particular, Government will ensure that relevant bodies required to be constituted at State levels in the National Cooperative development policy as well as ensuring that the Cooperative Movement play a key role in the Plateau State MSMEDF for Cooperatives.

The keynote speaker, Dr. Festus U. Agbo presented a paper on the theme of the workshop/Annual General Meeting tagged: ‘Securing Reliable Co-operative capital for Enhanced Job creation and Employment in Nigeria; Challenges and prospects;

Chief Ebikiri Akpolo gave the vote of thanks urging the Government of Plateau State to make good its promise of Partnering the Cooperative movement at the grass root.
<br />

**ISSUED DISCUSSED**

- There is the need to build strong and virile cooperative Apexex in Nigeria.

- Two main challenges to cooperatives – accessibility and funding deficit, funding agencies give what is likened to poisoned chalice.

- There is the need to improve on our approach to advocacy in the Cooperative movement.

- Government should provide the enabling environment for cooperative to thrive, and should partner with the cooperative movement to drive development programmes especially, at the grass roots.

- The movement should get its priorities right, and should not fail to do the needful as require by the Cooperative principles, rather than engage in blame game of either the apexex or the Government.

- There is the need to build structure and employ the required technology to improve on transparency, accountability, good corporate governance and enhanced reporting system.

- There is also the need to build a reliable data base that will enable development partners and Government to appreciate the challenges cooperatives and identify areas that require intervention.

- All hands should be on deck for the attainment of the identified goals.
<br />

**RECOMMENDATIONS**

1. There is the need to improve on advocacy and information dissemination at all levels.

2. There is the need to immediately set-up the necessary infrastructure for the take-off of the National Cooperative Development Fund (NCDF) as a stepping stone establishing a National Coop to guarantee greater access to Bank finance for cooperative societies in Nigeria.There is the need to immediately set-up the necessary infrastructure for the take-off of the National Cooperative Development Fund (NCDF) as a stepping stone establishing a National Coop to guarantee greater access to Bank finance for cooperative societies in Nigeria.

3. Cooperative Societies should operate by the cooperative principle to avoid over –dependence on Government.

4. That there is the need to improve on cooperative data Analysis system (CODAS) to effectively capture all functional cooperatives in Nigeria, so as to produce the required data that will enhance better policies and planning for cooperatives.

5. Transparency, good corporate governance and global best practice should be entrenched in the management of cooperative societies in Nigeria.

6. Finally, the general disconnect in the cooperative sector, especially between the Apexes and affiliates should be bridged to enhance good communication and members’ education.
    `,
    clock: "",
  },
  {
    id: 7,
    img: CFNLogo,
    wallpaper: Media7,
    time: "24 NOV. 2015",
    title: 
      "Address by Engr. Jibrin Bala Jos, president, co-operative federation of Nigeria (CFN)/ vice-chairman, the Alliance Africa, on the occasion of CFN’s pre-agm national workshop on securing ‘‘reliable co-operative capital for enhanced job creation and employment generation’’: challenges and prospects, holding at hill station, Jos, Plateau state, on 24th November, 2015",
    label: "Communique",
    text: `
**Protocols**

I am highly delighted to be here today because Jos is a second home to me, that is why I am popularly known as ‘’Baba Jos’’. Permit me, therefore, Mr. Chairman, ladies, and gentlemen, to join our host in welcoming you all to the beautiful city of Jos.

Before I proceed with my search, I would like to, on behalf of the Co-operative Movement, congratulate His Excellency, the Executive Governor of Plateau State, on his assumption of office. Your Excellency, the gathering of the co-operative members from across Nigeria in Jos is a good omen for your administration, and by extension, that of President Muhammadu Buhari (GCFR), Commander-in-Chief of the armed forces, Federal Republic of Nigeria.

CFN is the National umbrella of co-operatives, representing over 10 million family co-operative members, who are involved in different types of economic activities. Membership of CFN is drawn from State Co-operative Federations of the 36 states of the Federation and the FCT, as well as national and state sectoral co-operative Apexes, and national primary co-operative societies. This makes CFN the single largest organization with a membership base stretching from the grassroots to the national economy. This sounds impressive, and it is true. But the other side is several challenges, among them, lack of access to capital constrains co-operatives’ capacity to create jobs and generate employment.

The objective for this workshop, therefore, is to identify and discuss the various ways which co-operatives can ensure and access reliable capital to grow their enterprises, earn higher incomes, and create more jobs and provide employment.

Our deliberations and their outcomes should deeply interest Governments at Federal and State level, because only through an effective partnership between government and the Civil Society, of which co-operatives form a large part, can sustainable development be achieved. And sustainable development cannot be achieved until the majority of our population is mobilized and empowered to take an active part in economic and development processes. This is precisely where the ICA Africa Co-operative Development Strategy (ACODES) is relevant and should be integrated by the Government into National Development Plans. The ACODES contains five pillars that will drive co-operative enterprises in Africa up to 2016. These pillars are participation, sustainability, identity/ image, legal framework, and capital.

Co-operatives, in all modesty, and without prejudice to the important role which other civil society groups can play, provide the most effective and efficient means by which sustainable development can be achieved in Nigeria. The UN Statement on Sustainable Development Goals (SDGs) states, in part, “We acknowledge the role of the diverse private sector, ranging from micro-enterprises to co-operatives to multinationals”.

The Co-operative Movement of Nigeria has fully embraced the change in the country and is prepared to contribute its quota to the government’s efforts towards the socio-economic development of the nation. It is in this regard that we urge Governments at all levels to diligently implement the Co-operative Development Policy for Nigeria (2002), in order to create a more favorable environment for co-operatives to grow and develop. The vision of this policy is to strengthen the entrepreneurial capacities of co-operatives to enable them to earn more surpluses and provide employment to the general public. The policy makes provision for the creation of the following frameworks:

- National Council on Co-operative Affairs (NCCA);

- National Co-operative Advisory Board (NCAB); and

- National Co-operative Development Fund (NCDF), which seed fund to be provided by Governments at Federal and State levels. The Federal Ministry of Agriculture and Rural Development established the NCCA and NCAB, but the NCDF is yet to be established.

At the state level, only Ekiti State has established the SCCA and the SCAB. I, therefore, wish to urge His Excellency. The Executive Governor of Plateau State, and his counterparts to ensure the creation of these policy frameworks reposition the co-operative sector to enable it to contribute maximally to the socio-economic development of the country.

The Africa Co-operative Ministers under the ICA Africa Ministerial Conference (MC) held in Gabarone, Botswana, from 10- 13 October 2015. A one-day workshop attended by Ministers and leaders of Co-operative Movement in the region during the conference deliberated on the contribution of co-operatives to African Union’s Agenda 2063, and resolved, among other things, that co-operatives of all types have been contributing to AU’s Agenda 2063. Similarly, the European Union has embarked on a three-year Co-operative Project. African governments, Nigeria in particular, should flow with the global co-operative development trend because of the obvious advantages in terms of job creation and employment, poverty reduction, and empowerment for women and youths and so on.

Special Guest of Honour, ladies, and gentlemen, I will be failing in my duty if I do not use this opportunity to inform co-operative members, stakeholders and our guests that CFN is hosting the 12th ICA Africa Regional Assembly next year.

This event brings together co-operative leaders and government officials from the African region, as well as the ICA Global and development partners, to discuss common challenges and prospects of co-operative development in the region. I, therefore urge all co-operators and stakeholders to take advantage of the forthcoming event to network, exchange ideas and experience towards improving their co-operatives.

In conclusion, I wish to thank the Government of Plateau State for identifying with the Co-operative Movement of the State. I must also thank our host, the Plateau State Co-operative Federation for their spirit of co-operative solidarity.

Thank you for your kind attention and God bless.
    `,
    clock: "",
  },
  {
    id: 8,
    img: CFNLogo,
    wallpaper: Media8,
    time: "18 FEB. 2014",
    title:
      "Communique of CFN Capacity Building Workshop for CFN Board Members Held at FOMWAN Complex, Abuja 18th February, 2014",
    label: "Communique",
    text: `
The Co-operative Federation of Nigeria (CFN) organized a one-day capacity building workshop for the CFN Board of Directors in Abuja on the 18th February 2014. Thirteen Board members, including the Chairman, Engr. Jibrin Bala participated in the workshop whose theme was: Re-defining movement for collaborative partnerships towards co-operative development.

The facilitator of the workshop, Mr. J.J. Buden, an experienced lecturer at the Kaduna polytechnic who is widely respected by the co-operative movement in the country made a presentation on the theme of the workshop. Mr Buden’s presentation focused on the respective roles of the government and the co-operative movement as contained in the Co-operative Development Policy for Nigeria (2002) and relevant sections of the Nigeria Co-operative Act CAP 98 of 2004 Laws of the Federation of Nigeria. Participants discussed the paper extensively and adopted the following resolutions:

1. That individual co-operative members as citizens should be encouraged to participate in the political processes to enhance the fortunes of the co-operative movement;

2. The need for reliable statistics and data on co-operatives was emphasized, and the CFN was urged to facilitate the process for the collection of co-operative data and statistics;

3. The workshop identified the need for effective co-operative auditing services to be provided by the co-operative movement in line with the Act (2004) L. F. N;

4. The workshop also observed the general lack of public awareness on co-operative, and the need for rapport between the government and the co-operative movement, and therefore, urged co-operative leaders at all tiers to take steps towards improving their relationship with all tiers of government through orchestrated advocacy;

5. The meeting endorsed the regular hosting of capacity-building  and interactive sections among leaders of the co-operative movement;

6. The workshop expressed dissatisfaction over SMEDAN’s use of the co-operative model under the Local Government, One project (OLOP) initiative recently launched by the Federal Ministry of Trade and Industry, without the inclusion of representatives of the co-operative movement;

7. The meeting commended His Excellency, Commander-In-Chief of the Armed Forces of the Federal Republic of Nigeria, President Dr. Goodluck Jonathan, GCFR, for the decision to convene the National Conference, but noted with dismay the exclusion of the Co-operative movement from the list of participants to the conference;

8. The workshop also noted with satisfaction, the increasing number of State Governments which have, following the adoption of the Co-operative Development Policy for Nigeria in 2002, established fully-fledged ministries of co-operatives, and urged other states that are yet to established, to do so without further delay; and

9. The workshop commended the ‘’transformation agenda’’ of the Federal Government under President Goodluck Jonathan, in particular, the ‘’ Agricultural Transformation Agenda’’, and pledged the support of the co-operative movement of Nigeria to transform the economic fortunes of Nigeria through the co-operative enterprise model.
    `,
    clock: "",
  },
  {
    id: 9,
    img: CFNLogo,
    wallpaper: Media9,
    time: "17 OCT. 2013",
    title: 
      "Address by Engr Jibrin Bala, national president, Co-operative Federation of Nigeria (CFN) during a courtesy visit to the Hon minister of agriculture and rural development, Abuja on 17th October 2013",
    label: "Communique",
    text: `
**Protocol** 

About five months ago, precisely on 28th May, 2013 I led the Regional Director of the International Co-operative Alliance (ICA) Africa, Dr. Chioye Sifa, and some members of the Board of Directors of the Co-operative Federation of Nigeria (CFN) to pay you a courtesy visit. Dr. Sifa was in Nigeria to hold consultation with the ICA member organizations in Nigeria, which are the CFN, Odu’a Co-operative Alliance (ODA) and the Nigerian National Petroleum Corporation (NNPC) Staff Co-operative, Lagos with a view to electing on board member among us to represent the West African sub-region on the ICA Africa Regional Board. In addition, the ICA Africa Regional Director held an interactive session with our co-operative members in Abuja on ICA Africa Co-operative Development Strategy.

Today, we are here to intimate you on developments following the last of the ICA Africa Regional director and our preparations towards the forthcoming ICA Global International Conference and General Assembly holding in Cape Town, South Africa, from 1st to 5th November, 2013.

We are glad to report to you that for the first time, the Co-operative Movement of Nigeria was able to second a staff to ICA Africa based on request. Early September 2013 Mrs. Lydia Fayanjuola of Delta State Co-operative movement was presented to CFN Board which approved her secondment to the ICA Africa Regional Office in Nairobi, Kenya. This was not a father christmas gesture. It was a step taken to capacitate the ICA Africa Regional Office and in consideration of the strategic interest of the Co-operative Movement in Nigeria. The financial implication of this commitment is about US$32,000.00 per annum which our members have raised to provide accommodation, utilities, return ticket and some monthly stipends for Mrs. Fayanjuola.

It is also pertinent to intimate you that Mr. Joseph Adeleke Ojeyemi, President of the NNPC Staff Co-operative Lagos, was unanimously adopted by the CFN Board to stand for elections for the position of Board member of the ICA Global Board, representing Africa.

Why is Nigeria interested in this position? We consider that the Nigerian Co-operative Movement has a strong potential to develop into a dynamic movement that will provide greater opportunities for members and the general public for employment and job creation. However, the Nigerian Co-operative movement must develop its potential and the ICA possesses what it takes to help strengthen Nigeria’s co-operative movement. For example, the Agricultural Transformation Agenda (ATA) being implemented by the Federal Ministry of Agriculture and Rural Development presents a great opportunity for co-operative entrepreneurship, but co-operative members must be capacitated to take advantage of this opportunity. It is in this regard that one can better appreciate the ICA Africa Co-operative Development Strategy which has agriculture as its first pillar. The leadership of Co-operative movement of Kenya in Africa today cannot be divorced from decades of ICA presence and positive influence. This sums up why the Co-operative movement of Nigeria considers constructive engagement with the ICA at both Regional and Global levels key to its development. In modest opinion, strengthening the co-operative movement of Nigeria will pay good dividends to the ATA because the co-operative system presents a most efficient way of driving a programme involving millions of subsistent farmers across a vast landmass, the size of Nigeria.

In conclusion, we must express just how proud we feel about our Honourable Minister being recognized by the ICA Global to be a keynote speaker at the international conference in Cape Town during the General Assembly. We wish to remind you of the pledge you made with  regards to ICA Africa contribution of US$100,000.00 being the amount to capacitate ICA Africa Regional office in Nairobi, Kenya, agreed to pay by Honourable Ministers responsible co-operatives in Africa. This is particularly urgent since smaller countries like Lesotho have paid. We also wish the Honourable Minister would consider nominating a candidate for consideration by the ICA Africa Regional Board for membership of the ICA Africa Endowment Fund during the General Assembly in Cape Town.

I cannot conclude without expressing our profound appreciation and thanks to the Honourable Minister for his keen interest in the progress of the co-operative movement. We also thank the Permanent Secretary for her kind gesture which has always made it possible for us to visit the Honourable in spite of the Minister’s very tight schedule.

Thank you for your kind attention and God bless.
    `,
    clock: "",
  },
  {
    id: 10,
    img: CFNLogo,
    wallpaper: Media10,
    time: "27 AUG. 2012",
    title:
      "Communique of the Pque of the pre-agm national conference of the Cooperative Federation of Nigeria (CFN) and its launching of the UN international year of cooperatives, holding in Port Harcourt, Rivers state, 27th-30th August 2012",
    label: "Communique",
    text: `
**The AGM resolved to sincerely thank Mr. President, H.E.Dr. Goodluck Jonathan, for his beneficial Cooperative Housing Scheme Initiative and recommends as follows:**
<br />

The National Cooperative Housing Scheme should follow vertical cooperative structures:

- Primary cooperative societies at the ward level;

- Local Government Area- based Secondary Housing Unions;

- State Housing Cooperative Associations

- A National Housing Cooperative Federation.

- On finance  the AGM resolved that:
<br />

The Federal Government is requested to devise mechanisms to:

- Reduce the interest rates on production loans

- Extend the period for loan repayments to at least twenty-four months to ease the pressure on producers.

- The Government is called upon to recognize the special role of cooperatives in accelerated sustainable socio-economic development and accordingly grant them adequate fiscal and financial support.

- On women representation in governance, the AGM noted with satisfaction the Government’s affirmative programmes and actions and called upon all cooperative organizations to enable this good example.

- The AGM calls on the Federal Government to create an enabling environment for cooperative development by, among others, granting the Cooperative Movement its autonomy and independence and thus abate any undue interference.

- The AGM calls on the Government to deeply involve the Cooperative Movement in preparing any new Cooperative Development Policy and Cooperative Societies Act.

- The AGM calls on the Federal and the State Governments to implement the provisions of the 2002 Cooperative Development Policy, among them:

- The creation of the National Cooperative Development Fund

- The establishment of the study of Cooperatives into the secondary school curriculum

- The proper incorporation of cooperative matters and interests in the nation’s socio- economic development programmes.

- The AGM further resolved that the review of the Cooperative Development policy should be completed and accepted first before embarking on a new review of the subsisting Cooperative Societies Act, N98 of 1993.

- The Cooperative Movement accepts to institute measures to regularly audit all cooperative societies as envisaged in the 2002 Cooperative Development Policy and calls on both the Federal and State Governments to support the Movement enable it meet this challenge.

- The Cooperative Movement calls on both Federal and State Governments to establish a separate Ministry for Cooperative and Rural Development as envisaged in the 2002 Cooperative Development Policy.
- The state Government are called upon to establish the State Council for Cooperative Affairs as well as the State Cooperative Advisory Board, also as provided for in the Cooperative Development Policy of 2002.
    `,
    clock: "",
  },
 
].map((item) => ({
  ...item,
  clock: computeReadingTime(item.title, item.text),
}));


