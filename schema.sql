CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,   -- Unique patient ID
    sol VARCHAR(50),                     -- SOL (Not sure what this represents; you can clarify)
    fecha DATE,                          -- Date of test/result
    curp VARCHAR(18) UNIQUE,             -- Unique CURP (Mexican ID)
    municipio VARCHAR(100),              -- Municipality
    paciente VARCHAR(100),               -- Patient's full name
    sexo ENUM('M', 'F', 'Other'),        -- Gender (Male, Female, Other)
    edad INT,                            -- Age
    escuela VARCHAR(255),                -- School name
    derechohabiencia VARCHAR(100),       -- Right to health services
    ayuno BOOLEAN,                       -- Fasting status (Yes/No)
    glucosa DECIMAL(5,2),                -- Glucose level
    trigliceridos DECIMAL(5,2),          -- Triglycerides level
    colesterol_total DECIMAL(5,2),       -- Total Cholesterol
    hba1c DECIMAL(4,2),                  -- HbA1c (Glycated Hemoglobin)
    peso DECIMAL(5,2),                   -- Weight (kg)
    talla DECIMAL(5,2),                  -- Height (meters)
    imc DECIMAL(5,2),                    -- Body Mass Index (BMI)
    icc DECIMAL(5,2),                    -- ICC (Waist-to-Hip Ratio)
    cintura DECIMAL(5,2),                -- Waist measurement (cm)
    cadera DECIMAL(5,2),                 -- Hip measurement (cm)
    comentario TEXT,                     -- Doctor's or analyst's comments
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- Auto-generated timestamp
);


