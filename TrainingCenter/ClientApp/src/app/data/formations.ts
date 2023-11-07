import { ListCtaegories, ListDuréeFormation, ListPrixFormation } from "./dropdowndata"

export const formations = [
    { N: '1', title: 'Fondamentaux techniques de la securité des systemes d’information', Category: 'Securité', Durée: '3semaines', Prix: '40£' },
    { N: '2', title: 'Principe et organisation des audits en securité', Category: 'Securité', Durée: '2 semaines', Prix: '70£' },
    { N: '3', title: 'developpement des applications mobile', Category: 'Developement', Durée: '6 mois', Prix: '140£' },
    { N: '4', title: 'Fondamentaux techniques de la securité des systemes d’information', Category: 'Securité', Durée: '3semaines', Prix: '40£' },
    { N: '5', title: 'Principe et organisation des audits en securité', Category: 'Securité', Durée: '2 semaines', Prix: '70£' },
    { N: '6', title: 'developpement des applications mobile', Category: 'Developement', Durée: '6 mois', Prix: '140£' },
    { N: '7', title: 'Fondamentaux techniques de la securité des systemes d’information', Category: 'Securité', Durée: '3semaines', Prix: '40£' },
    { N: '8', title: 'Principe et organisation des audits en securité', Category: 'Securité', Durée: '2 semaines', Prix: '70£' },
    { N: '9', title: 'developpement des applications mobile', Category: 'Developement', Durée: '6 mois', Prix: '140£' },
    { N: '10', title: 'Principe et organisation des audits en securité', Category: 'Securité', Durée: '2 semaines', Prix: '70£' },
    { N: '11', title: 'developpement des applications mobile', Category: 'Developement', Durée: '6 mois', Prix: '140£' },
    { N: '12', title: 'Fondamentaux techniques de la securité des systemes d’information', Category: 'Securité', Durée: '3semaines', Prix: '40£' },
    { N: '13', title: 'Principe et organisation des audits en securité', Category: 'Securité', Durée: '2 semaines', Prix: '70£' },
    { N: '14', title: 'developpement des applications mobile', Category: 'Developement', Durée: '6 mois', Prix: '140£' }
]

export const columnsformations = [
    
        { prop: 'title'  , name :'title'},
        { prop: 'Category' , name :'Category' },
        { prop: 'Durée'  , name :'Durée'},
        { prop: 'Prix'  , name :'Prix' }
    
]

export const Populationcible = [   
    { id: 1  , name :'Étudiants en design'},
    { id: 2  , name :'Développeurs web'},
    { id: 3  , name :'Professionnels en reconversion'},
]

export const Prerequis = [ 
    { id: 1  , name :'Connaissance du design dinterface utilisateur'},
    { id: 2  , name :'Compétences en design graphique'},
]

export const Programmeformations = [
    
    { name: 'CCP 1 : Concevoir les éléments graphiques d une interface et de supports de communication'  , programme : [ 'Réaliser des illustrations, des graphismes et des visuels' , 'Concevoir des interfaces graphiques et des prototypes' , 'Réaliser une animation pour différents supports de diffusion' , 'Créer des supports de communication']},
    { name: 'CCP 2 : Concevoir les éléments graphiques d une interface et de supports de communication '  , programme : [ 'Connaissance du design dinterface utilisateur' , 'Compétences en design graphique']},
    { name: 'CCP 3 : Concevoir les éléments graphiques d une interface et de supports de communication'  , programme : [ 'Réaliser des illustrations, des graphismes et des visuels' , 'Concevoir des interfaces graphiques et des prototypes' , 'Réaliser une animation pour différents supports de diffusion' , 'Créer des supports de communication']},
    { name: 'CCP 4 : Concevoir les éléments graphiques d une interface et de supports de communication'  , programme : [ 'Réaliser des illustrations, des graphismes et des visuels' ,  'Réaliser une animation pour différents supports de diffusion' , 'Créer des supports de communication']},

]

export const Filterformations = {
    'Category':  ListCtaegories,

    'Durée': ListDuréeFormation,
    
    'Prix':  ListPrixFormation
    
}