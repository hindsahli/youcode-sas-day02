/**
 * JOUR 02 — GUIDE 03
 * Les boucles imbriquées (Grille)
 *
 * OBJECTIF
 * Affichez un carré de 3 lignes et 3 colonnes rempli d'étoiles *.
 *
 * Aide : consulte ../02-guides.md seulement si tu bloques.
 */
'use strict';

// TODO: écris ta solution ici.

for(let i = 1 ; i <=3 ; i++)
{
    let line = ""
    for(let i = 1 ; i <=3 ; i++)
    {
        line += "*"
    }
    console.log(line)
}