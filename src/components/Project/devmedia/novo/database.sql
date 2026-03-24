CREATE TABLE medicos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    telefone VARCHAR(20),
    email VARCHAR(100),
    especialidade VARCHAR(100)
);

INSERT INTO medicos (nome, telefone, email, especialidade) VALUES
(1, 'Dr. Luiz Idelgardes', '(21) 90000-0000', 'lidelgardes@email.com', 'Médico especialista em pediatria'),
(2, 'Dr. Peter Addison', '(21) 91111-1111', 'paddison@email.com', 'Médico especializado em alergia infantil'),
(3, 'Dra. Elisa Amaral', '(21) 92222-2222', 'eamaral@email.com', 'Médica especializada em psiquiatria infantil'),
(4, 'Dra. Catherine Halsey', '(21) 93333-3333', 'chalsey@email.com', 'Médica especializada em fisioterapia infantil'),
(5, 'Dr. Gregory House', '(21) 94444-4444', 'ghouse@email.com', 'Médico especializado em infectologia'),
(6, 'Dr. Sofia Amaral', '(21) 99999-0001', 'samaral@email.com', 'Médico especializado em pediatria'),
(7, 'Dra. Júlia Zaccarias', '(21) 99999-0005', 'jzaccarias@email.com', 'Médico especializado em pediatria'),
(8, 'Dr. Curtis Connors', '(21) 99999-0002', 'cconnors@email.com', 'Médico especializado em genética'),
(9, 'Dr. John Seward', '(21) 99999-0003', 'jseward@email.com', 'Médico especializado em psiquiatria infantil'),
(10, 'Dr. Stephen Strange', '(21) 99999-0004', 'sstrange@email.com', 'Médico cirurgião');
