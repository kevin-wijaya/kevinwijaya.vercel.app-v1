from flask import Flask, render_template, send_from_directory, abort
from datetime import datetime
import json, os

app = Flask(__name__)

projects, contacts, data = None, None, None

def fetch():
    global projects, contacts, data
    with open('static/data/projects.json', 'r') as file: projects = json.load(file)
    with open('static/data/contacts.json', 'r') as file: contacts = json.load(file)
    projects = sorted(projects, key=lambda x: datetime.strptime(x['end_date'], '%d/%m/%Y'), reverse=True)
    for p in projects:
        if p['pin']:projects.remove(p);projects.insert(0, p)

    data = {
        'contacts':contacts,
        'projects':projects,
    }
    
    data['allSize'] = len(projects)
    data['mlSize'] = len([_ for _ in projects if('Machine Learning' in _['type'])])
    data['devSize'] = len([_ for _ in projects if('Software Development' in _['type'])])
    data['bothSize'] = len([_ for _ in projects if('Machine Learning' in _['type'] and 'Software Development' in _['type'])])
    
def convertTimes(projects):
    for i,_ in enumerate(projects):
        strDate = projects[i]['end_date'].split('/')
        strDate = datetime(int(strDate[2]), int(strDate[1]), int(strDate[0]))
        curDate = datetime.now()
        diffTime = curDate - strDate
        diffDays = diffTime.days
        diffMonths = diffDays // 30
        diffYears = diffMonths // 12
        output = ''
        if   diffYears > 0:     output = f"{diffYears} year{'s' if diffYears > 1 else ''} ago"
        elif diffMonths > 0:    output = f"{diffMonths} month{'s' if diffMonths > 1 else ''} ago"
        elif diffDays > 0:      output = f"{diffDays} day{'s' if diffDays > 1 else ''} ago"
        else:                   output = "Today"
        projects[i]['times'] = output
    return projects

def getImages(projects):
    for i,_ in enumerate(projects): 
        arrImage = os.listdir('static/src/image/projects/' + str(_['id']) + '/')
        miniImage = str(_['id'])+'.png'
        if (miniImage in arrImage) : arrImage.remove(miniImage)
        projects[i]['image'] = arrImage
    return projects


@app.route('/')
@app.route('/index')
@app.route('/home')
def home():
    global projects, contacts, data; fetch()
    menu = 'Home'
    return render_template("index.html", **data, menu=menu)
    
@app.route('/portfolio')
@app.route('/portfolio/')
@app.route('/portfolio/<string:show>', methods=['GET'])
def portfolio(show=None):
    global projects, contacts, data; fetch()
    menu = 'Portfolio'
    projects = getImages(projects)
    projects = convertTimes(projects)
    if show==None:
        data['projects'] = projects
    elif show=='both':
        data['projects'] = [_ for _ in projects if('Machine Learning' in _['type'] and 'Software Development' in _['type'])]
    elif show=='ml':
        data['projects'] = [_ for _ in projects if('Machine Learning' in _['type'])]
    elif show=='dev':
        data['projects'] = [_ for _ in projects if('Software Development' in _['type'])]
    else:
        abort(404)
    
    return render_template("portfolio.html", **data, menu=menu)

@app.errorhandler(404)
def error(msg):
    menu = 'Error (404)'
    return render_template("error.html", e=404, msg=msg, menu=menu), 404

@app.errorhandler(500)
def error(msg):
    menu = 'Error (500)'
    return render_template("error.html", e=500, msg=msg, menu=menu), 500

@app.route('/<file>')
def openFile(file):
    _ = os.path.join('static', 'src', 'file')
    return send_from_directory(_, file)

def debug():
    global projects, contacts, data
    if __name__ == '__main__':
        app.run(debug=True)
