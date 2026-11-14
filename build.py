#!/usr/bin/env python3
"""Builds index.html (the standalone app) from src/aspire-calc.html (the calculator source).
Run:  python3 build.py"""
import os, re
here=os.path.dirname(os.path.abspath(__file__))
src=open(os.path.join(here,'src','aspire-calc.html'),encoding='utf-8').read()
i=src.index('</style>')+len('</style>')
head, body = src[:i], src[i:]
head=re.sub(r'<meta name="claude:[^>]*>\n?','',head)
shell=open(os.path.join(here,'src','shell.html'),encoding='utf-8').read()
out=shell.replace('<!--HEAD-->',head).replace('<!--APP-->',body)
open(os.path.join(here,'index.html'),'w',encoding='utf-8').write(out)
print('built index.html',len(out),'bytes')
