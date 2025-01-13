import { FiBook, FiTarget, FiUser, FiCheckCircle, FiZap } from 'react-icons/fi';

export const slides = [
  {
    id: 'basis',
    icon: FiBook,
    title: "Basis",
    subtitle: "Zo werkt de BooleanTool",
    content: "Ontdek hoe je snel en effectief de juiste leads vindt met de BooleanTool.",
    details: [
      {
        title: "Hoe het werkt",
        content: "De BooleanTool maakt complexe Sales Navigator zoekopdrachten eenvoudig:\n\n1. Maak je zoekopdracht met onze interface\n2. Bekijk een gratis steekproef\n3. Verfijn je criteria indien nodig\n4. Download de volledige lijst (1 credit)\n5. Start direct met outreach\n\nTip: Gebruik de steekproef om je zoekopdracht te valideren voordat je credits gebruikt."
      },
      {
        title: "Boolean Operatoren",
        content: "Onze tool gebruikt slimme boolean logica om je zoekopdracht te optimaliseren:"
      }
    ],
    preview: {
      type: "boolean",
      title: "Boolean Operatoren",
      content: {
        operators: [
          {
            type: "AND",
            description: "Combineert trefwoorden",
            example: "marketing AND manager"
          },
          {
            type: "OR",
            description: "Alternatieve termen",
            example: "saas OR software"
          },
          {
            type: "Groepen",
            description: "Combineer operatoren",
            example: "( saas OR software ) AND ( sales OR marketing )"
          }
        ]
      }
    }
  },
  {
    id: 'list-type',
    icon: FiTarget,
    title: "Lijsttype",
    subtitle: "Kies de juiste lijst voor je doel",
    content: "",
    details: [
      {
        title: "Bedrijven zoeken",
        content: "Vind bedrijven door te filteren op grootte, locatie, bedrijfstak, aantal volgers, groei en gebruikte technologie. Bijvoorbeeld: IT-bedrijven in de Randstad, 50-200 medewerkers, die Salesforce gebruiken. Of: groeiende productiebedrijven in Noord-Brabant met 200+ medewerkers."
      },
      {
        title: "Bedrijven uploaden",
        content: "Upload een CSV met LinkedIn Company ID's uit de bedrijfs-URL (bijvoorbeeld: https://www.linkedin.com/company/1234567). Let op: zoeken op bedrijfsnaam werkt minder goed omdat bedrijven vaak verschillende schrijfwijzen gebruiken op LinkedIn. Maak in onze tool eerst een bedrijvenlijst en upload hem in de leadlijst"
      }
    ],
    preview: {
      type: "flow",
      title: "Optimale workflow",
      content: [
        "Nieuwe bedrijvenlijst",
        "Maak search",
        "Steekproef",
        "Download CSV",
        "Upload in leadlijst",
        "Outreach"
      ]
    }
  },
  {
    id: 'search-criteria',
    icon: FiUser,
    title: "Zoekcriteria",
    subtitle: "Optimaliseer je zoekopdracht",
    content: "",
    details: [
      {
        title: "Vooringestelde criteria",
        content: "Branche en functiecategorie staan niet altijd juist op profielen aangegeven. Ook hebben veel Nederlanders Engels als profieltaal ingesteld. Dit resulteert in minder resultaten. Gebruik trefwoorden om dit te compenseren - dit geeft vaak betere resultaten dan vooringestelde filters."
      },
      {
        title: "Pro tips",
        content: "Gebruik boolean operatoren slim:\n\n• Groepeer gerelateerde termen: (verkoop OR sales)\n• Combineer groepen: (marketing OR sales) AND (manager OR director)\n• Sluit uit met NOT: sales NOT junior\n\nZo bouw je krachtige zoekopdrachten die precies de juiste leads vinden."
      }
    ],
    preview: {
      type: "search",
      title: "Voorbeeld zoekopdracht",
      content: {
        filters: [
          {
            label: "Branche",
            value: "Software & IT"
          },
          {
            label: "Trefwoorden",
            value: "saas, software, cloud"
          },
          {
            label: "Functieniveau",
            value: "Manager / Director"
          }
        ]
      }
    }
  },
  {
    id: 'dos-and-donts',
    icon: FiCheckCircle,
    title: "Do's en Don'ts",
    subtitle: "Tips voor het beste resultaat",
    content: "",
    details: [
      {
        title: "Do's",
        items: [
          "Begin met een bedrijvenlijst voor schonere data",
          "Test met een steekproef voor je credits gebruikt",
          "Gebruik alle schrijfvarianten van functietitels",
          "Maak gebruik van trefwoorden voor extra filtering",
          "Upload eigen bedrijvenlijst voor specifieke targeting",
          "Begin breed en verfijn stap voor stap"
        ]
      },
      {
        title: "Don'ts",
        items: [
          "Niet alle velden tegelijk invullen",
          "Geen kleine radius voor grote steden",
          "Niet alleen op Nederlandse profieltaal filteren",
          "Bedrijfstak niet te specifiek maken",
          "Niet te veel trefwoorden/bedrijven tegelijk",
          "Geen bedrijvenlijst als je alle bedrijven in regio wilt"
        ]
      }
    ]
  },
  {
    id: 'get-started',
    icon: FiZap,
    title: "Aan de slag",
    subtitle: "Begin direct met zoeken",
    content: "Je bent er klaar voor! Gebruik deze laatste tips om direct resultaat te behalen.",
    details: [
      {
        title: "Vragen over de tool?",
        items: [
          "Bekijk onze uitgebreide FAQ",
          "Volg een live demo sessie",
          "Contact support voor vragen"
        ]
      },
      {
        title: "Meer over ons",
        items: [
          "Ontdek onze andere tools",
          "Lees onze succesverhalen",
          "Volg ons op LinkedIn"
        ]
      }
    ],
    preview: {
      type: "results",
      title: "Resultaten preview"
    }
  }
];