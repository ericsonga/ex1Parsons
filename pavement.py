import paver
from paver.easy import *
import paver.setuputils
paver.setuputils.install_distutils_tasks()
import os, sys

from sphinxcontrib import paverutils

sys.path.append(os.getcwd())

home_dir = os.getcwd()
from socket import gethostname

master_url = None
if master_url is None:
    if gethostname() == 'web407.webfaction.com':
        master_url = 'http://interactivepython.org'
    else:
        master_url = 'http://127.0.0.1:8000'
        
master_app = 'runestone'
serving_dir = "./build/Ex1Parsons"
dest = '../../static'

options(
    sphinx = Bunch(docroot=".",),

    build = Bunch(
        builddir="./build/Ex1Parsons",
        sourcedir="_sources",
        outdir="./build/Ex1Parsons",
        confdir=".",
        project_name = "Ex1",
        template_args={'course_id': 'Ex1Parsons',
                       'login_required':'true',
                       'appname':master_app,
                       'loglevel': 10,
                       'course_url':master_url,
                       'use_services': 'true',
                       'python3': 'true'
                        }
    )
)

from runestone import build  # build is called implicitly by the paver driver.

