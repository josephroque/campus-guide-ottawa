/**
 *
 * @license
 * Copyright (C) 2016 Joseph Roque
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @author Joseph Roque
 * @file UsefulLinks.js
 * @description Categories with lists of links.
 *
 */
'use strict';

/* eslint-disable global-require */
/* eslint-disable max-len */

module.exports = [
  {
    id: 'university',
    name_en: 'University of Ottawa',
    name_fr: 'Université d\'Ottawa',
    image: require('../../assets/images/buildings/outer_placeholder.jpg'),
    links: [
      {
        name_en: 'Home',
        name_fr: 'Accueil',
        link_en: 'http://www.uottawa.ca/en',
        link_fr: 'http://www.uottawa.ca/fr',
      },
      {
        name: 'uoZone',
        link_en: 'http://www.uottawa.ca/en/students',
        link_fr: 'http://www.uottawa.ca/fr/etudiants',
      },
      {
        name_en: 'uoCal (Calendar of Events)',
        name_fr: 'uoCal (Calendrier des événements)',
        link_en: 'http://uocal.uottawa.ca/',
        link_fr: 'http://uocal.uottawa.ca/fr',
      },
      {
        name: 'Rate My Professors',
        link: 'http://www.ratemyprofessors.com/campusRatings.jsp?sid=1452',
      },
      {
        name_en: '101 Week',
        name_fr: 'Semaine 101',
        link_en: 'http://www.semaine101week.com/',
        link_fr: 'http://www.semaine101week.com/fr',
      },
      {
        name_en: 'Library',
        name_fr: 'Bibliothèque',
        link_en: 'http://biblio.uottawa.ca/en',
        link_fr: 'http://biblio.uottawa.ca/fr',
      },
      {
        name_en: 'Accessibility',
        name_fr: 'Accessibilité',
        link_en: 'http://www.uottawa.ca/respect/en/accessibility',
        link_fr: 'http://www.uottawa.ca/respect/fr/accessibilite',
      },
      {
        name_en: 'Emergency',
        name_fr: 'Urgence',
        link_en: 'http://www.emergencypreparedness.uottawa.ca/',
        link_fr: 'http://www.soyezprets.uottawa.ca/index.html',
      },
    ],
    social: [
      {
        name: 'LinkedIn',
        link: 'http://www.linkedin.com/edu/school?id=10858',
      },
      {
        name: 'Twitter',
        link: 'https://twitter.com/uottawa',
      },
      {
        name: 'Facebook',
        link: 'https://www.facebook.com/uottawa',
      },
      {
        name: 'Instagram',
        link: 'http://instagram.com/uottawa',
      },
      {
        name: 'YouTube',
        link: 'http://www.youtube.com/uottawa',
      },
      {
        name: 'Tumblr',
        link: 'http://uottawa.tumblr.com/',
      },
    ],
  },
  {
    id: 'faculties',
    name_en: 'Faculties',
    name_fr: 'Facultés',
    image: require('../../assets/images/buildings/outer_placeholder_2.jpg'),
    categories: [
      {
        id: 'arts',
        name: 'Arts',
        links: [
          {
            name_en: 'Faculty of Arts',
            name_fr: 'Faculté des arts',
            link_en: 'http://arts.uottawa.ca/en',
            link_fr: 'http://arts.uottawa.ca/fr',
          },
          {
            name_en: 'Canadian and Aboriginal Studies',
            name_fr: 'Études canadiennes et autochtones',
            link_en: 'http://arts.uottawa.ca/canada/en',
            link_fr: 'http://arts.uottawa.ca/canada/fr',
          },
          {
            name_en: 'Centre for Research on French Canadian Culture (Fr)',
            name_fr: 'Centre de recherche en civilisation canadienne-française',
            link: 'http://arts.uottawa.ca/crccf/',
          },
          {
            name_en: 'Classics and Religious Studies',
            name_fr: 'Études anciennes et sciences des religions',
            link_en: 'http://arts.uottawa.ca/cla-srs/en',
            link_fr: 'http://arts.uottawa.ca/cla-srs/fr',
          },
          {
            name: 'Communication',
            link_en: 'http://arts.uottawa.ca/communication/en',
            link_fr: 'http://arts.uottawa.ca/communication/fr',
          },
          {
            name: 'English',
            link: 'http://arts.uottawa.ca/english/',
          },
          {
            name: 'Français',
            link: 'http://arts.uottawa.ca/lettres/',
          },
          {
            name_en: 'Geography',
            name_fr: 'Géographie',
            link_en: 'http://arts.uottawa.ca/geography/',
            link_fr: 'http://arts.uottawa.ca/geographie/',
          },
          {
            name_en: 'History',
            name_fr: 'Histoire',
            link_en: 'http://arts.uottawa.ca/history/',
            link_fr: 'http://arts.uottawa.ca/histoire/',
          },
          {
            name_en: 'Information Studies',
            name_fr: 'Science de l\'information',
            link_en: 'http://arts.uottawa.ca/sis/',
            link_fr: 'http://arts.uottawa.ca/esi/',
          },
          {
            name_en: 'Institute for Science, Society, and Policy',
            name_fr: 'Institut de recherche sur la science, la société et la politique publique',
            link_en: 'http://issp.uottawa.ca/en',
            link_fr: 'http://issp.uottawa.ca/fr',
          },
          {
            name_en: 'Linguistics',
            name_fr: 'Linguistique',
            link_en: 'http://arts.uottawa.ca/linguistics/',
            link_fr: 'http://arts.uottawa.ca/linguistique/',
          },
          {
            name_en: 'Modern Languages',
            name_fr: 'Langues et littératures modernes',
            link_en: 'http://arts.uottawa.ca/modernlanguages/',
            link_fr: 'http://arts.uottawa.ca/languesmodernes/',
          },
          {
            name_en: 'Music',
            name_fr: 'Musique',
            link_en: 'http://arts.uottawa.ca/music/',
            link_fr: 'http://arts.uottawa.ca/musique/',
          },
          {
            name_en: 'Official Lanuages and Bilingualism Institute',
            name_fr: 'Institut des langues officielles et du bilinguisme',
            link_en: 'http://olbi.uottawa.ca/',
            link_fr: 'http://ilob.uottawa.ca/',
          },
          {
            name_en: 'Philosophy',
            name_fr: 'Philosophie',
            link_en: 'http://arts.uottawa.ca/philosophy/',
            link_fr: 'http://arts.uottawa.ca/philosophie/',
          },
          {
            name_en: 'Theatre',
            name_fr: 'Théâtre',
            link_en: 'http://arts.uottawa.ca/theatre/en',
            link_fr: 'http://arts.uottawa.ca/theatre/fr',
          },
          {
            name_en: 'Translation and Interpretation',
            name_fr: 'Traduction et interprétation',
            link_en: 'http://arts.uottawa.ca/translation/',
            link_fr: 'http://arts.uottawa.ca/traduction/',
          },
          {
            name_en: 'Visual Arts',
            name_fr: 'Arts visuels',
            link_en: 'http://arts.uottawa.ca/visualarts/',
            link_fr: 'http://arts.uottawa.ca/artsvisuels/',
          },
          {
            name_en: 'Other',
            name_fr: 'Autre',
            link_en: 'http://arts.uottawa.ca/en/programs',
            link_fr: 'http://arts.uottawa.ca/fr/programmes',
          },
        ],
        social: [
          {
            name: 'Facebook',
            link: 'https://www.facebook.com/arts.uottawa',
          },
          {
            name: 'Twitter',
            link: 'https://twitter.com/uottawaarts',
          },
          {
            name: 'YouTube',
            link: 'http://www.youtube.com/uOttawaArts',
          },
        ],
      },
      {
        id: 'law',
        name_en: 'Law',
        name_fr: 'Droit',
        links: [
          {
            name_en: 'Faculty of Law - Civil Law',
            name_fr: 'Faculté de droit - Section de droit civil',
            link_en: 'http://droitcivil.uottawa.ca/en',
            link_fr: 'http://droitcivil.uottawa.ca/fr',
          },
          {
            name_en: 'Faculty of Law - Common Law',
            name_fr: 'Faculté de droit - Section de common law',
            link_en: 'http://commonlaw.uottawa.ca/en',
            link_fr: 'http://commonlaw.uottawa.ca/fr',
          },
        ],
        social: [
          {
            name: 'Twitter',
            link: 'http://twitter.com/uocommonlaw',
          },
          {
            name: 'Twitter',
            link: 'https://twitter.com/DrCiviluOttawa',
          },
        ],
      },
      {
        id: 'education',
        name_en: 'Education',
        name_fr: 'Éducation',
        links: [
          {
            name_en: 'Faculty of Education',
            name_fr: 'Faculté d\'éducation',
            link_en: 'http://education.uottawa.ca/en',
            link_fr: 'http://education.uottawa.ca/fr',
          },
        ],
        social: [
          {
            name: 'Facebook',
            link: 'http://www.facebook.com/uOttawaEducation',
          },
          {
            name: 'Twitter',
            link: 'https://twitter.com/uottawaedu',
          },
          {
            name: 'YouTube',
            link: 'http://www.youtube.com/user/uOttawaEducation',
          },
        ],
      },
      {
        id: 'engineering',
        name_en: 'Engineering',
        name_fr: 'Ingénierie',
        links: [
          {
            name_en: 'Faculty of Engineering',
            name_fr: 'Faculté de génie',
            link_en: 'http://www.engineering.uottawa.ca/',
            link_fr: 'http://genie.uottawa.ca/',
          },
          {
            name_en: 'Chemical and Biological Engineering',
            name_fr: 'Génie chimique et biologique',
            link_en: 'http://engineering.uottawa.ca/chemical/',
            link_fr: 'http://genie.uottawa.ca/chimique/',
          },
          {
            name_en: 'Civil Engineering',
            name_fr: 'Génie civil',
            link_en: 'http://engineering.uottawa.ca/civil/',
            link_fr: 'http://genie.uottawa.ca/civil/',
          },
          {
            name_en: 'Electrical Engineering and Computer Science',
            name_fr: 'Science informatique et génie électrique',
            link_en: 'http://engineering.uottawa.ca/eecs/',
            link_fr: 'http://genie.uottawa.ca/sige/',
          },
          {
            name_en: 'Mechanical Engineering',
            name_fr: 'Génie mécanique',
            link_en: 'http://engineering.uottawa.ca/mechanical/',
            link_fr: 'http://genie.uottawa.ca/mecanique/',
          },
        ],
        social: [
          {
            name: 'Facebook',
            link: 'https://www.facebook.com/uottawa.engineering',
          },
          {
            name: 'Twitter',
            link: 'https://twitter.com/uottawagenie',
          },
          {
            name: 'YouTube',
            link: 'http://www.youtube.com/user/FacultyofEngineering',
          },
          {
            name: 'Tumblr',
            link: 'http://engineering-uottawa-memories.tumblr.com/',
          },
        ],
      },
      {
        id: 'graduate',
        name_en: 'Graduate',
        name_fr: 'Études supérieures',
        links: [
          {
            name_en: 'Faculty of Graduate and Postdoctoral Studies',
            name_fr: 'Faculté des études supérieures et postdoctorales',
            link_en: 'http://www.grad.uottawa.ca/Default.aspx?tabid=1406',
            link_fr: 'http://www.etudesup.uottawa.ca/Default.aspx?tabid=1405',
          },
        ],
      },
      {
        id: 'healthSciences',
        name_en: 'Health Sciences',
        name_fr: 'Sciences de la santé',
        links: [
          {
            name_en: 'Faculty of Health Sciences',
            name_fr: 'Faculté des sciences de la santé',
            link_en: 'http://www.health.uottawa.ca/',
            link_fr: 'http://www.sante.uottawa.ca/index.htm',
          },
          {
            name_en: 'Health Sciences',
            name_fr: 'Sciences de la santé',
            link_en: 'http://www.health.uottawa.ca/healthsciences/',
            link_fr: 'http://www.sante.uottawa.ca/sciencessante/index.htm',
          },
          {
            name_en: 'Human Kinetics',
            name_fr: 'Sciences de l\'activité physique',
            link_en: 'http://www.health.uottawa.ca/shk/',
            link_fr: 'http://www.sante.uottawa.ca/esap/',
          },
          {
            name_en: 'Nursing',
            name_fr: 'Sciences infirmières',
            link_en: 'http://www.health.uottawa.ca/sn/',
            link_fr: 'http://www.sante.uottawa.ca/esi/index.htm',
          },
          {
            name_en: 'Nutrition Sciences',
            name_fr: 'Sciences de la nutrition',
            link_en: 'http://www.health.uottawa.ca/nutrition/index.htm',
            link_fr: 'http://www.sante.uottawa.ca/nutrition/index.htm',
          },
          {
            name_en: 'Rehabilitation Sciences',
            name_fr: 'Sciences de la réadaptation',
            link_en: 'http://www.health.uottawa.ca/sr/',
            link_fr: 'http://www.sante.uottawa.ca/esr/',
          },
        ],
        social: [
          {
            name: 'Facebook',
            link: 'https://www.facebook.com/pages/UOttawa-Facult%C3%A9-des-sciences-de-la-sant%C3%A9-Faculty-of-Health-Sciences/287243141336363',
          },
          {
            name: 'Twitter',
            link: 'https://twitter.com/uOttawaHealthSc',
          },
          {
            name: 'YouTube',
            link: 'http://www.youtube.com/user/hswebmas/videos',
          },
        ],
      },
      {
        id: 'medicine',
        name_en: 'Medicine',
        name_fr: 'Médicine',
        links: [
          {
            name_en: 'Faculty of Medicine',
            name_fr: 'Faculté de médicine',
            link_en: 'http://www.medecine.uottawa.ca/eng/',
            link_fr: 'http://www.medecine.uottawa.ca/fra/index.html',
          },
          {
            name_en: 'Undergraduate Medical Education',
            name_fr: 'Études médicales de premier cycle',
            link_en: 'http://med.uottawa.ca/undergraduate/',
            link_fr: 'http://med.uottawa.ca/premier-cycle/',
          },
          {
            name_en: 'Graduate and Postdoctoral Studies',
            name_fr: 'Études supérieures et postdoctorales',
            link_en: 'http://med.uottawa.ca/graduate-postdoctoral/',
            link_fr: 'http://med.uottawa.ca/superieures-postdoctorales/',
          },
          {
            name_en: 'MD/PhD Program',
            name_fr: 'Programme M.D./Ph.D.',
            link_en: 'http://www.med.uottawa.ca/md-phd/eng/',
            link_fr: 'http://www.med.uottawa.ca/md-phd/fra/index.html',
          },
          {
            name_en: 'Postgraduate Medical Education Program',
            name_fr: 'Études médicales postdoctorales',
            link_en: 'http://www.med.uottawa.ca/Postgraduate/eng/',
            link_fr: 'http://www.med.uottawa.ca/Postgraduate/fra/index.html',
          },
          {
            name_en: 'Continuing Medical Education',
            name_fr: 'Formation médicale continue',
            link_en: 'http://www.med.uottawa.ca/cme/eng/index.html',
            link_fr: 'http://www.med.uottawa.ca/fmc/fra/index.html',
          },
          {
            name_en: 'Biochemistry, Microbiology, and Immunology',
            name_fr: 'Biochimie, microbiologie et immunologie',
            link_en: 'http://www.med.uottawa.ca/bmi/eng/index.html',
            link_fr: 'http://www.med.uottawa.ca/bmi/fra/',
          },
          {
            name_en: 'Cellular and Molecular Medicine',
            name_fr: 'Médicine cellulaire et moléculaire',
            link_en: 'http://www.medecine.uottawa.ca/cellmed/eng/',
            link_fr: 'http://www.med.uottawa.ca/cellmed/fra/',
          },
          {
            name: 'Epidemiology and Community Medicine',
            link: 'http://med.uottawa.ca/epidemiology/',
          },
          {
            name: 'Anesthesia',
            link: 'http://www.med.uottawa.ca/anesthesia/eng/index.html',
          },
          {
            name: 'Emergency Medicine',
            link: 'http://www.emottawa.ca/eng/index.html',
          },
          {
            name_en: 'Family Medicine',
            name_fr: 'Médicine familiale',
            link_en: 'http://www.familymedicine.uottawa.ca/eng/',
            link_fr: 'http://www.familymedicine.uottawa.ca/fra/index.html',
          },
          {
            name: 'Medicine',
            link: 'http://thinkottawamedicine.ca/',
          },
          {
            name: 'Obstetrics and Gynecology',
            link: 'http://med.uottawa.ca/obs-gyne/',
          },
          {
            name_en: 'Ophthalmology',
            name_fr: 'Ophthalmologie',
            link_en: 'http://www.ottawahospital.on.ca/wps/portal/Base/TheHospital/ClinicalServices/DeptPgrmCS/Programs/EyeInstitute/!ut/p/c5/jdBLU4MwFAXgX2RzQ3iEJTSBhBYbQCxl4_TJxPLQ4mjLr5eOG8cZq_cuvzlncVCJxm_X77pav-muXdeoQKX9xKgjQmkaALFwQdpAKKMGXrjW6KtvTu2cg0wCV-HEN1wT_pP2AaczkotYzHEAkkUxUYkFIOw_0hEq9aaZfGybCUwc7FqUEmradGQgaMm2xzPrvIpxlvaDD7XYGNFChppHWefxWNR3TetclH-EbUJWVcea9kFbp2JQSe3UIMMWL_XenD-H0M-mxqpo8a68UCMshzNWvQ761x3N2VTVqV0dnLgjAVpeF7y9yNUfHQ6ujz1YyJyC9FIzYRknoJzbntk_-2PGxv4pDX3BMID55bc2vTr8ch6ge9E1e5QdTuilyYthf0x5Sr1Pu7B2NA!!/dl3/d3/L0lHSkovd0RNQURrQUVnQSEhL1lCZncvZW4!/',
            link_fr: 'http://www.ottawahospital.on.ca/wps/portal/Base/TheHospital/ClinicalServices/DeptPgrmCS/Programs/EyeInstitute/!ut/p/c5/jdBLU4MwFAXgX2RzQ4CEJTRAQosNIJaycfpAJpaHiqMtv146bhxnrN67_OacxUElmr7bvut6-6b7btugApX2A2dUhNI0AGLhgLSBMM4MvHKsyTffnNm5DzIJHIUTz3BM-E_aA5wuSC5iscQBSB7FRCUWgLD_SEeo1Lt29rFvZzCj2LEYI8y02cRA0JrvjyfeuzX3eTqMHjRiZ0QrGWo_ynrXj0Vz03b0rLwj7BOyqXvednfaei1GlTS0ARl2eK0rc_kUwrCYG5uiw4fyzIywHE9YDToYXg4s53PVpHb9SOOeBGh9WfD6Ihe_pz44HnZhJXMG0k3NhGc-AUWve2b_7I85n_rnLPQExwDml1_b9OLwy7mAbkXfViirOvTc5sVYHVM_Ze4ng3dMaQ!!/dl3/d3/L0lHSkovd0RNQURrQUVnQSEhL1lCZncvZnI!/',
          },
          {
            name_en: 'Oto-rhino-laryngology',
            name_fr: 'Oto-rhino-laryngologie',
            link_en: 'http://www.med.uottawa.ca/Otolaryngology/eng/',
            link_fr: 'http://www.med.uottawa.ca/Otolaryngology/fra/',
          },
          {
            name_en: 'Pathology and Laboratory Medicine',
            name_fr: 'Pathologie et médicine de laboratoire',
            link_en: 'http://www.med.uottawa.ca/Pathology/eng/',
            link_fr: 'http://www.med.uottawa.ca/Pathology/fra/index.html',
          },
          {
            name: 'Pediatrics',
            link: 'http://www.pediatrics.uottawa.ca/eng/',
          },
          {
            name: 'Psychiatry',
            link: 'http://www.med.uottawa.ca/psychiatry/eng/index.html',
          },
          {
            name: 'Radiology',
            link: 'http://www.med.uottawa.ca/Radiology/eng/',
          },
          {
            name: 'Surgery',
            link: 'http://www.med.uottawa.ca/surgery/eng/index.html',
          },
        ],
      },
      {
        id: 'sciences',
        name_en: 'Science',
        name_fr: 'Sciences',
        links: [
          {
            name_en: 'Faculty of Science',
            name_fr: 'Faculté des sciences',
            link_en: 'http://science.uottawa.ca/en',
            link_fr: 'http://science.uottawa.ca/fr',
          },
          {
            name_en: 'Biology',
            name_fr: 'Biologie',
            link_en: 'http://science.uottawa.ca/biology/programs-of-study/biomedical-science',
            link_fr: 'http://science.uottawa.ca/biologie/',
          },
          {
            name_en: 'Chemistry',
            name_fr: 'Chimie',
            link_en: 'http://science.uottawa.ca/chemistry/',
            link_fr: 'http://science.uottawa.ca/chimie/',
          },
          {
            name_en: 'Earth Sciences',
            name_fr: 'Sciences de la Terre',
            link_en: 'http://science.uottawa.ca/earth/',
            link_fr: 'http://science.uottawa.ca/terre/',
          },
          {
            name_en: 'Physics',
            name_fr: 'Physique',
            link_en: 'http://science.uottawa.ca/physics/',
            link_fr: 'http://science.uottawa.ca/physique/',
          },
          {
            name_en: 'Mathematics and Statistics',
            name_fr: 'Mathématiques et statistique',
            link_en: 'http://science.uottawa.ca/mathstat/en',
            link_fr: 'http://science.uottawa.ca/mathstat/fr',
          },
        ],
        social: [
          {
            name: 'Facebook',
            link: 'https://www.facebook.com/pages/uOttawa-Science/342608530150',
          },
          {
            name: 'Twitter',
            link: 'https://twitter.com/uottawascience',
          },
        ],
      },
      {
        id: 'socialSciences',
        name_en: 'Social Sciences',
        name_fr: 'Sciences sociales',
        links: [
          {
            name_en: 'Faculty of Social Sciences',
            name_fr: 'Faculté des sciences sociales',
            link_en: 'http://socialsciences.uottawa.ca/',
            link_fr: 'http://sciencessociales.uottawa.ca/',
          },
          {
            name_en: 'Criminology',
            name_fr: 'Criminologie',
            link_en: 'http://socialsciences.uottawa.ca/crm',
            link_fr: 'http://sciencessociales.uottawa.ca/crm',
          },
          {
            name_en: 'Economics',
            name_fr: 'Science économique',
            link_en: 'http://socialsciences.uottawa.ca/eco',
            link_fr: 'http://sciencessociales.uottawa.ca/eco',
          },
          {
            name_en: 'International Development and Global Studies',
            name_fr: 'Développement international et mondialisation',
            link_en: 'http://socialsciences.uottawa.ca/dvm',
            link_fr: 'http://sciencessociales.uottawa.ca/dvm',
          },
          {
            name_en: 'Political Studies',
            name_fr: 'Études politiques',
            link_en: 'http://socialsciences.uottawa.ca/pol',
            link_fr: 'http://sciencessociales.uottawa.ca/pol',
          },
          {
            name_en: 'Psychology',
            name_fr: 'Psychologie',
            link_en: 'http://socialsciences.uottawa.ca/psy',
            link_fr: 'http://sciencessociales.uottawa.ca/psy',
          },
          {
            name_en: 'Public and International Affairs',
            name_fr: 'Affaires publiques et internationales',
            link_en: 'http://socialsciences.uottawa.ca/api',
            link_fr: 'http://sciencessociales.uottawa.ca/api',
          },
          {
            name_en: 'Social Work',
            name_fr: 'Service social',
            link_en: 'http://socialsciences.uottawa.ca/svs',
            link_fr: 'http://sciencessociales.uottawa.ca/svs',
          },
          {
            name_en: 'Sociological and Anthropological Studies',
            name_fr: 'Études sociologiques et anthropologiques',
            link_en: 'http://socialsciences.uottawa.ca/soc-ant',
            link_fr: 'http://sciencessociales.uottawa.ca/soc-ant',
          },
          {
            name_en: 'Feminist and Gender Studies',
            name_fr: 'Études féministes et de genre',
            link_en: 'http://socialsciences.uottawa.ca/fem',
            link_fr: 'http://sciencessociales.uottawa.ca/fem',
          },
        ],
        social: [
          {
            name: 'Facebook',
            link: 'https://www.facebook.com/uottawafss',
          },
          {
            name: 'Twitter',
            link: 'https://twitter.com/uottawafss',
          },
        ],
      },
      {
        id: 'telfer',
        name_en: 'Telfer',
        name_fr: 'Telfer',
        links: [
          {
            name_en: 'Telfer School of Management',
            name_fr: 'École de gestion Telfer',
            link_en: 'http://www.telfer.uottawa.ca/en',
            link_fr: 'http://www.telfer.uottawa.ca/fr',
          },
          {
            name_fr: 'Comptabilité',
            name_en: 'Accounting',
            link_fr: 'http://www.telfer.uottawa.ca/bcom/fr/options-du-programme/comptabilite',
            link_en: 'http://www.telfer.uottawa.ca/bcom/en/program-options/accounting',
          },
          {
            name_en: 'Entrepreneurship',
            name_fr: 'Entrepreneuriat',
            link_en: 'http://www.telfer.uottawa.ca/bcom/en/program-options/entrepreneurship',
            link_fr: 'http://www.telfer.uottawa.ca/bcom/fr/options-du-programme/entrepreneuriat',
          },
          {
            name_en: 'Executive MBA',
            name_fr: 'MBA pour cadres',
            link_en: 'http://www.telfer.uottawa.ca/emba/en',
            link_fr: 'http://www.telfer.uottawa.ca/emba/fr',
          },
          {
            name: 'Finance',
            link_en: 'http://www.telfer.uottawa.ca/bcom/en/program-options/finance',
            link_fr: 'http://www.telfer.uottawa.ca/bcom/fr/options-du-programme/finance',
          },
          {
            name_en: 'Human Resource Management',
            name_fr: 'Gestion des ressources humaines',
            link_en: 'http://www.telfer.uottawa.ca/bcom/en/program-options/human-resource-management',
            link_fr: 'http://www.telfer.uottawa.ca/bcom/fr/options-du-programme/gestion-des-ressources-humaines',
          },
          {
            name_en: 'International Management',
            name_fr: 'Gestion internationale',
            link_en: 'http://www.telfer.uottawa.ca/bcom/en/program-options/international-management',
            link_fr: 'http://www.telfer.uottawa.ca/bcom/fr/options-du-programme/gestion-internationale',
          },
          {
            name: 'Management',
            link_en: 'http://www.telfer.uottawa.ca/bcom/en/program-options/management',
            link_fr: 'http://www.telfer.uottawa.ca/bcom/fr/options-du-programme/management',
          },
          {
            name: 'Marketing',
            link_en: 'http://www.telfer.uottawa.ca/bcom/en/program-options/marketing',
            link_fr: 'http://www.telfer.uottawa.ca/bcom/fr/options-du-programme/marketing',
          },
          {
            name_en: 'Management Information Systems',
            name_fr: 'Systèmes d\'information de gestion',
            link_en: 'http://www.telfer.uottawa.ca/bcom/en/program-options/mis',
            link_fr: 'http://www.telfer.uottawa.ca/bcom/fr/options-du-programme/systemes-dinformation-de-gestion-sig',
          },
          {
            name_en: 'Master in Business Admin.',
            name_fr: 'Maîtrise en administration des affaires',
            link_en: 'http://www.telfer.uottawa.ca/mba/en',
            link_fr: 'http://www.telfer.uottawa.ca/mba-f/fr',
          },
          {
            name_en: 'Master of Health Admin.',
            name_fr: 'Maîtrise en gestion des services de santé',
            link_en: 'http://www.telfer.uottawa.ca/mha/en',
            link_fr: 'http://www.telfer.uottawa.ca/mha/fr',
          },
        ],
        social: [
          {
            name: 'Facebook',
            link: 'https://www.facebook.com/Telfer.uOttawa',
          },
          {
            name: 'Twitter',
            link: 'https://twitter.com/telfer_uOttawa',
          },
        ],
      },
    ],
  },
  {
    id: 'sfuo',
    name_en: 'Student Federation',
    name_fr: 'Fédération étudiante',
    image: require('../../assets/images/buildings/outer_placeholder.jpg'),
    links: [
      {
        name_en: 'SFUO Home',
        name_fr: 'Accueil de la FÉUO',
        link_en: 'http://sfuo.ca/',
        link_fr: 'http://sfuo.ca/fr/',
      },
    ],
    social: [
      {
        name: 'Twitter',
        link: 'http://twitter.com/sfuo_feuo',
      },
    ],
    categories: [
      {
        id: 'sfuoServices',
        name_en: 'SFUO Services',
        name_fr: 'Services de SFUO',
        links: [
          {
            name_en: 'Bike Co-op',
            name_fr: 'Co-op vélo',
            link_en: 'http://sfuo.ca/bikes',
            link_fr: 'http://sfuo.ca/bikes/fr',
          },
          {
            name_en: 'Bilingualism Centre',
            name_fr: 'Centre de bilinguisme',
            link_en: 'http://www.sfuo.ca/bilingualism',
            link_fr: 'http://sfuo.ca/bilingualism/fr',
          },
          {
            name_en: 'Centre for Students with Disabilities',
            name_fr: 'Centre pour étudiantes ayant un handicap',
            link_en: 'http://www.sfuo.ca/csd',
            link_fr: 'http://sfuo.ca/csd/fr',
          },
          {
            name_en: 'Food Bank',
            name_fr: 'Banque alimentaire de la FÉUO',
            link_en: 'http://www.sfuo.ca/foodbank',
            link_fr: 'http://sfuo.ca/foodbank/fr',
          },
          {
            name_en: 'Foot Patrol',
            name_fr: 'Service de raccompagnement',
            link_en: 'http://www.sfuo.ca/footpatrol',
            link_fr: 'http://sfuo.ca/footpatrol/fr',
          },
          {
            name_en: 'International House',
            name_fr: 'Maison internationale',
            link_en: 'http://www.sfuo.ca/ihouse',
            link_fr: 'http://sfuo.ca/ihouse',
          },
          {
            name_en: 'Peer Help Centre',
            name_fr: 'Centre d\'entraide',
            link_en: 'http://www.sfuo.ca/peerhelp',
            link_fr: 'http://sfuo.ca/peerhelp/fr',
          },
          {
            name_en: 'Pride Centre',
            name_fr: 'Centre de la fierté',
            link_en: 'http://www.sfuo.ca/pride',
            link_fr: 'http://sfuo.ca/pride/fr/',
          },
          {
            name_en: 'Student Rights Centre',
            name_fr: 'Le Centre des droits étudiants',
            link_en: 'http://rights.sfuo.ca/',
            link_fr: 'http://droits.feuo.ca/',
          },
          {
            name_en: 'Sustainable Development Centre',
            name_fr: 'Centre de développement durable',
            link_en: 'http://www.sfuo.ca/green',
            link_fr: 'http://sfuo.ca/green/fr',
          },
          {
            name_en: 'Women\'s Resource Centre',
            name_fr: 'Centre de ressources des femmes',
            link_en: 'http://www.sfuo.ca/wrc',
            link_fr: 'http://sfuo.ca/wrc/fr',
          },
        ],
      },
      {
        id: 'studentAssociations',
        name_en: 'Student Associations',
        name_fr: 'Associations étudiantes',
        links: [
          {
            name_en: 'Students\' Association of the Faculty of Arts',
            name_fr: 'Association étudiante de la faculté des arts',
            link_en: 'http://www.artsuottawa.ca/',
            link_fr: 'http://www.fr.artsuottawa.ca/',
          },
          {
            name_en: 'Communications Students\' Association',
            name_fr: 'Association des étudiantes en communication',
            link_en: 'http://aeec-csa.ca/',
            link_fr: 'http://aeec-csa.ca/',
          },
          {
            name_en: 'Computer Science Student Association',
            name_fr: 'Association des étudiantes de science de l\'informatique',
            link_en: 'http://cssa-aei.ca/',
            link_fr: 'http://cssa-aei.ca/',
          },
          {
            name_en: 'Conflict Studies and Human Rights Students\' Association',
            link_en: 'http://socialsciences.uottawa.ca/api/student-association',
          },
          {
            name_en: 'Criminology Student Association',
            name_fr: 'Association des étudiantes en criminologie',
            link_en: 'http://www.csa-aec.com/#!home/c22r0',
            link_fr: 'http://www.csa-aec.com/#!francais--accueil/c17zm',
          },
          {
            name_en: 'Economic Student Association',
            name_fr: 'Association des étudiantes en science économique',
            link: 'http://www.ecouo.ca/',
          },
          {
            name_en: 'Engineering Students\' Society',
            name_fr: 'Association des étudiantes en génie',
            link: 'http://essaeg.ca/',
          },
          {
            name: 'Undergraduate English Students\' Association',
            link: 'http://www.uesa.ca/',
          },
          {
            name_en: 'Health Sciences Student Association',
            name_fr: 'Association des étudiantes en sciences de la santé',
            link_en: 'http://www.hssuottawa.ca/#!__english',
            link_fr: 'http://www.hssuottawa.ca/#!__french',
          },
          {
            name_en: 'Human Kinetics Student Association',
            name_fr: 'Association des étudiantes en science de l\'activité physique',
            link_en: 'http://hksa-aeeap.ca/en/',
            link_fr: 'http://hksa-aeeap.ca/fr/',
          },
          {
            name_en: 'International Development and Globalization Student Association',
            name_fr: 'Association des étudiantes en développement international et mondialisation',
            link_en: 'http://en.aedsa.ca/',
            link_fr: 'http://fr.aedsa.ca/',
          },
          {
            name_en: 'Undergraduate Nursing Student Association',
            name_fr: 'Association des étudiantes pre-diplômes en sciences infirmiere',
            link_en: 'http://www.unsaaepsi.com/#!home/mainPage',
            link_fr: 'http://www.unsaaepsi.com/#!acceuil/c1qd6',
          },
          {
            name: 'Association des étudiants en nutrition',
            link: 'http://adenut.com/',
          },
          {
            name_en: 'International, Political and Policy Studies Students\' Association',
            name_fr: 'Association étudiante des études internationales et politiques',
            link_en: 'http://en.aeeippssa.ca/',
            link_fr: 'http://fr.aeeippssa.ca/',
          },
          {
            name_en: 'Psychology Students\' Association',
            name_fr: 'Association des étudiantes en psychologie',
            link_en: 'http://psaep.ca/',
            link_fr: 'http://psaep.ca/?lang=fr',
          },
          {
            name: 'Science Students\' Association',
            link: 'http://www.ssaaes.com/',
          },
          {
            name_en: 'Telfer Student Council',
            name_fr: 'Conseil étudiant Telfer',
            link_en: 'http://cetsc.ca/',
            link_fr: 'http://cetsc.ca/fr/',
          },
        ],
      },
    ],
  },
  {
    id: 'sports',
    name_en: 'Sports & Clubs',
    name_fr: 'Sports et clubs',
    image: require('../../assets/images/buildings/outer_placeholder_2.jpg'),
    links: [
      {
        name_en: 'SFUO Clubs',
        name_fr: 'Clubs de la FÉUO',
        link_en: 'http://sfuo.ca/clubs/',
        link_fr: 'http://sfuo.ca/clubs/fr/',
      },
      {
        name_en: 'SFUO Club Listings',
        name_fr: 'Liste des clubs de la FÉUO',
        link_en: 'http://sfuo.ca/clubs/clubs-listing/',
        link_fr: 'http://sfuo.ca/clubs/fr/liste-des-clubs/',
      },
      {
        name_en: 'Gee-Gees Campus Rec',
        name_fr: 'Secteur récréatif de Gee-Gees',
        link_en: 'https://www.geegees.ca/en/rec/home',
        link_fr: 'https://www.geegees.ca/fr/rec/accueil',
      },
      {
        name_en: 'Gee-Gees Interuniversity',
        name_fr: 'Interuniversitaire de Gee-Gees',
        link_en: 'https://www.geegees.ca/en/sports/home',
        link_fr: 'https://www.geegees.ca/fr/sports/accueil',
      },
      {
        name_en: 'Gym Hours of Operation',
        name_fr: 'Heures d\'ouverture du gymnase',
        link_en: 'https://www.geegees.ca/en/rec/hours-of-operation',
        link_fr: 'https://www.geegees.ca/fr/rec/heures-douverture',
      },
    ],
  },
  {
    id: 'emergency',
    name_en: 'Emergency',
    name_fr: 'Urgence',
    image: require('../../assets/images/buildings/outer_placeholder.jpg'),
    links: [
      {
        name_fr: 'Urgence sur le campus',
        name_en: 'On-Campus Emergency',
        link: 'tel:6135625411',
      },
      {
        name_fr: 'Urgence hors campus Emergency',
        name_en: 'Off-Campus Emergency',
        link: 'tel:911',
      },
      {
        name_en: 'uOttawa Emergency Preparedness',
        name_fr: 'Urgence',
        link_en: 'http://www.emergencypreparedness.uottawa.ca/',
        link_fr: 'http://www.soyezprets.uottawa.ca/',
      },
      {
        name_en: 'Protection Services',
        name_fr: 'Service de la protection',
        link_en: 'http://www.protection.uottawa.ca/en/index.html',
        link_fr: 'http://www.protection.uottawa.ca/fr/index.html',
      },
    ],
    social: [
      {
        name: 'Twitter',
        link: 'http://twitter.com/uottawaalert',
      },
    ],
  },
];
