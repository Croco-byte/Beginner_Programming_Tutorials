#!/usr/bin/python
# -*- coding: utf-8 -*-

### On importe la librairie 'socket', qui nous permettra de nous connecter à un port. Si on arrive à se connecter, le port est ouvert ; sinon, il ne l'est pas

import socket
from termcolor import colored

### On définit notre socket, ou interface de connection. Il utilisera l'adresse IP v4 (socket.AF_INET) et le protocole TCP (socket.SOCK_STREAM).

sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)


### On définit la cible et le port qu'on veut cibler

host = input("[+] Enter the host to scan : ")
range1 = int(input("[+] Select the starting port : "))
range2 = int(input("[+] Select the finishing port : "))
rangeport = range(range1, range2)

def portscanner(port) :

### La fonction sock.connect((host,port)) tente, à partir du socket spécifié, de se connecter à l'hôte 'host', au port 'port'. sock.connect_ex retourne la valeur "True" si une erreur, n'importe laquelle, est renvoyée.

    if sock.connect_ex((host,port)) :
        print(colored("Port {0} is closed".format(port), 'red'))
    else :
        print(colored("Port {0} is open".format(port), 'green'))

for port in rangeport :
    portscanner(port)
