SOLID

5 princípios


1 - SRP
Single Responsibility Principle

- Separar coisas que MUDAM POR MOTIVOS DIFERENTES
- Mover responsabilidades


2 - OCP
Open/Closed Principle

- Devemos etar fechados para modificação e abertos para extensão


3 - LSP
Liskov Substitution Principle

- Se S (Agua, Cerveja, ...) é subclasse de T (Item), em um programa deve ser possível substituir instâncias de T (Item) por instâncias de S (Agua, Cerveja, ...), SEM QUEBRAR O FUNCIONAMENTO DO PROGRAMA

Pré-condições não podem ser fortalecidas
- Deixando de aceitar ENTRADAS que a superclasse considera válida

Pós-condições não podem ser enfraquecidas
- Deixando as SAÍDAS diferentes da expectativa de quem está chamando o método 
- Aceitando saídas mais AMPLAS

Invariantes devem se manter consistentes
- Se uma subclasse permitir que o estado conceitual da hierarquia de classes fique inválida


4 - ISP
Interface Segregation Principle

- Cuidado com interfaces MUITO ABRANGENTES, não obrigue subclasse a implementar métodos que elas não precisam


5 - IDP
Depency Inversion Principle

- Módulos de ALTO-NÍVEL não devem depender de módulo de BAIXO-NÍVEL
- Ambos devem depender de abstrações