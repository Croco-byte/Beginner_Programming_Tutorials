#!/usr/bin/python
# -*- coding: utf-8 -*-

### On importe la librairie socket, normal. On importe ensuite la librairie optparse, qui va nous être utile pour l'affichage de l'aide utilisateur. Enfin, la librairie threading va nous permettre de jouer avec les threads pour scanner plus rapidement.

from socket import *
import argparse
from threading import *


### Fonction qui teste, pour un port et un hôte donné, si ce port est ouvert ou non.

def connectionScan(tgtHost, tgtPort) :
    sock = socket(AF_INET, SOCK_STREAM)
    setdefaulttimeout(2)

    if sock.connect_ex((tgtHost, tgtPort)) :
        print("[+] {0}/tcp closed".format(tgtPort))
    else :
        print("[+] {0}/tcp open".format(tgtPort))
    
    sock.close()


### Pour chaque port contenu dans la variable tgtPorts, on appelle la fonction connectionScan

def PortScan (tgtHost, tgtPorts) :
    try :
        tgtIP = gethostbyname(tgtHost)
    except :
        print("[-] Can't resolve host {0}.".format(tgtHost))
    try :
        tgtname = gethostbyaddr(tgtIP)
        print('[+] Port scan results for {0}'.format(tgtname[0]))
    except :
        print('[+] Port scan results for {0}'.format(tgtIP))

    setdefaulttimeout(2)

    for tgtPort in tgtPorts :
        t = Thread(target=connectionScan, args=(tgtHost, int(tgtPort)))
        t.start()


### Pour tous les ports compris entre le premier et dernier élément de la variable tgtPorts, on appelle la fonction connectionScan

def PortScanRange(tgtHost, tgtPorts) : 
    try :
        tgtIP = gethostbyname(tgtHost)
    except :
        print("[-] Can't resolve host {0}.".format(tgtHost))
    try :
        tgtname = gethostbyaddr(tgtIP)
        print('[+] Port scan results for {0}'.format(tgtname[0]))
    except :
        print('[+] Port scan results for {0}'.format(tgtIP))

    setdefaulttimeout(2)

    tgtRange = range(int(tgtPorts[0]), int(tgtPorts[1]))

    for port in tgtRange :
        t = Thread(target=connectionScan, args=(tgtHost, int(port)))
        t.start()




def main() :
    parser = argparse.ArgumentParser(description='This is a homemade port scanner !')    ### On définit notre parser et le message qu'il affiche
    parser.add_argument('-H','--host',help='Target IP [required]', type=str, required=True)   ### On définit le premier argument, l'hôte. On l'appelle -H ou --host, et on le rend obligatoire.
    parser.add_argument('-p','--port',help='Target port to scan [required]',type=str, required=True) ### Second argument


    args= parser.parse_args()
    tgtHost = args.host
    
    if args.port.find("-") is -1 :              ### Si l'utilisateur n'a pas précisé une range de ports, on enclenche le scan classique, port par port
        tgtPorts = str(args.port).split(',')    ### On permet à l'utilisateur de préciser plusieurs ports séparés par des virgules. On sépare la chaîne de caractère ainsi obtenue virgule par virgule. Cela donne un tableau avec tgtPorts[0] le premier port, tgtPorts[1] le second etc...
        PortScan(tgtHost, tgtPorts)

    else :
        tgtPorts = str(args.port).split('-')    ### Si l'utilisateur a précisé une range de ports, on enclenche un scan sur une planche de ports
        PortScanRange(tgtHost, tgtPorts)

    
if __name__ == '__main__' :      ### Pourquoi ? http://sametmax.com/pourquoi-if-__name__-__main__-en-python/ , c'est pour que la fonction main() ne s'exécute pas quand on importe ce script
    main()
