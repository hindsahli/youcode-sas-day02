3


/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 02 · EXERCICE 13 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * SUITE DE FIBONACCI
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Générez et affichez les 10 premiers nombres de la suite de Fibonacci. (La suite commence par 0, 1. Ensuite, chaque nombre est la somme des deux précédents : 0, 1, 1, 2, 3, 5, 8, 13...).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-13
 * ▶️ Commande : node day02/exercices/exercice-13.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.

let b = 0 
let a = 1 
 console.log(b)
 console.log(a)
 let i = 1 
 while (i < 9)
 {
    let c = a + b
    b = a 
    a = c
    console.log(c)
    i++;
 }
