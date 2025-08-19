class Restaurantes:
    def __init__(self, nome, tipo_culinaria):
        self.nome = nome
        self.tipo_culinaria = tipo_culinaria
        self.cardapio = []
        self.preco_medio = 0.0
        self.localizacao = None
        self.horario_funcionamento = None
        self.avaliacoes = []
        self.telefone = None
        self.website = None 
        self.imagem = None
        self.reservas = []
        self.mesas = []
        self.data = None

    def adicionar_item_cardapio(self, item):
        self.cardapio.append(item)

    def remover_item_cardapio(self, item):
        self.cardapio.remove(item)

    def atualizar_preco_medio(self, novo_preco):
        self.preco_medio = novo_preco

    def definir_localizacao(self, localizacao):
        self.localizacao = localizacao

    def definir_horario_funcionamento(self, horario):
        self.horario_funcionamento = horario

    def adicionar_avaliacao(self, avaliacao):
        self.avaliacoes.append(avaliacao)

    def definir_telefone(self, telefone):
        self.telefone = telefone

    def definir_website(self, website):
        self.website = website

    def definir_imagem(self, imagem):
        self.imagem = imagem

    def adicionar_reserva(self, reserva):
        self.reservas.append(reserva)

    def adicionar_mesa(self, mesa):
        self.mesas.append(mesa)

    def definir_data(self, data):
        self.data = data
