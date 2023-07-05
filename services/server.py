from flask import Flask, request
from flask_cors import CORS
import datetime
import random

class TicketApp:
    def __init__(self):
        self.app = Flask(__name__)
        CORS(self.app, resources={r"/*": {"origins": "http://localhost:3000"}})
        self.tickets = 800
        self.comensales = random.randint(700, 1000)
        self.randWait = random.randint(5,20)
        self.i = 0
        self.register_routes()

    def register_routes(self):
        self.app.add_url_rule("/horario", "horario", self.horario, methods=["POST"])
        self.app.add_url_rule("/tickets", "ticket", self.ticket)
        self.app.add_url_rule("/members", "members", self.members)
        self.app.add_url_rule("/personas", "personas", self.personas)

    def horario(self):
        print(request)
        if request.method == "POST":
            data = request.get_json()
            print(data)
            arg = data.get("arg")
        

            current_time = datetime.datetime.now().time().hour
            if current_time < 8 and current_time > 5:
                return  {"horario": ["Desayuno" if arg != 'en' else "Breakfast", "7:00 a.m."]}
            elif current_time >= 8 and current_time < 17:
                return {"horario": ["Almuerzo" if arg != 'en' else "Lunch", "8:00 a.m."]}
            elif current_time <= 18 and current_time >= 17:
                return {"horario": ["Cena" if arg != 'en' else "Dinner", "5:00 p.m."]}
            else:
                return {"horario": ["No disponible", "mañana"]}

    def ticket(self):
        self.i = self.i + 1
        if(self.i == self.randWait):
            self.tickets = self.tickets - 1
            self.comensales = self.comensales - 1
            self.randWait = random.randint(5,20)
            self.i = 0
        if(self.tickets <= 0):
            return {"tickets": "Se acabaron"}
        else:
            return {"tickets": self.tickets}
    
    def members(self):
        return {"members": ["Member1", "Member2", "Member3"]}

    def personas(self):
        return {"comensales": [ self.comensales, int(self.comensales /160) ]}

    def run(self):
        self.app.run(debug=True)

if __name__ == "__main__":
    ticket_app = TicketApp()
    ticket_app.run()
