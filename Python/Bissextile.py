# -*-coding:utf-8 -*

import math
import os # On importe le module os qui dispose de variables 

          # et de fonctions utiles pour dialoguer avec votre 

          # système d'exploitation


# Programme testant si une année, saisie par l'utilisateur, est bissextile ou non

def bissextile() :
	annee = input("Saisissez une année : ") # On attend que l'utilisateur fournisse l'année qu'il désire tester

	annee = int(annee) # Risque d'erreur si l'utilisateur n'a pas saisi un nombre


	if annee % 400 == 0 or (annee % 4 == 0 and annee % 100 != 0):

	    print("L'année saisie est bissextile.")

	else:

	    print("L'année saisie n'est pas bissextile.")


def table_7(nb, max=10) :

	i = 0
	while i <= max :
		print(nb*i)
		i = i+1


def lettres() :
	chaine = "lettres"
	for elements in chaine :
		print (elements, " - ")

def continuer() :
	i = 1
	compte = 0
	while i < 20 :
		if i % 3 == 0 :
			compte = compte + 4
			print ("Le nombre est un multiple de 3 ; on ajoute donc 4 au lieu de 1 ! i = ", i, " .Compteur = ", compte)
			i = i +1
			break

		compte = compte + 1
		print ("On incrémente le compteur de 1. i = ", i, " .Compteur = ", compte)
		i = i+1

def fonc_2(a=1, b=2, c=3, d=4, e=5) :
	print(a, b, c, d, e)

def multiple (param1, param2) :
	return param1, param2

def list() :
	x = [1, 2, 3, 4]
	x.extend([5, 6])

	for numbers in x :
		print (numbers)
	return x

def list2(f, y) :
	iterator = 0
	xlist = f()
	while iterator < y :
		xlist.append(9)
		iterator = iterator+1

	for numbers2 in xlist :
		print(numbers2)


# On met le programme en pause pour éviter qu'il ne se referme (Windows)

input("Appuyez sur ENTRÉE pour continuer ...")


