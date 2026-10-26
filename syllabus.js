/* ==========================================================================
   TNAU SYLLABUS DATA  (this is the only file you need to edit to change courses)

   Structure:
     one entry per syllabus set, chosen by the student's "Batch Start Year":
       from / to  = first and last batch year the set applies to
       programmes = programme name -> semester (Roman numeral) -> list of courses

   A course is written as:   ['CODE', 'Course title', 'theory+practical']
     e.g.  ['ERG 211', 'Renewable Energy and Green Technology', '1+1']

   Rules:
     - The programme name must match the "Degree Programme" dropdown exactly.
     - Credit hours are written like 2+1 (no spaces). A single number such as 2 also works.
     - Keep the commas and quotes exactly as shown. A missing comma stops the list loading.
     - If a title contains an apostrophe, write it as \'  (for example  Farmer\'s Guide).
   ========================================================================== */
window.CURRICULA = [
  { id: "up to 2024", label: "Syllabus for batches up to 2024", from: 0, to: 2024, programmes: {
    "B.Sc. (Hons.) Agriculture": {
      "I": [
        ["AEX 101", "Rural Sociology and Educational Psychology", "2+0"],
        ["AGR 101", "Fundamentals of Agronomy and Agricultural Heritage", "1+1"],
        ["BIC 101", "Fundamentals of Plant Biochemistry", "2+1"],
        ["ENG 101", "Comprehension and Communication Skills in English", "1+1"],
        ["FOR 111", "Introduction to Forestry and Agroforestry", "1+1"],
        ["HOR 111", "Fundamentals of Horticulture", "1+1"],
        ["MAT 111", "Elementary Mathematics", "1+1"],
        ["PBG 101", "Introduction to Agricultural Botany", "1+1"]
      ],
      "II": [
        ["AEC 102", "Fundamentals of Agricultural Economics", "1+1"],
        ["AEX 102", "Fundamentals of Agricultural Extension Education", "2+1"],
        ["AGM 101", "Fundamentals of Microbiology", "2+1"],
        ["AGR 102", "Introductory Agro-meteorology and Climate Change", "1+1"],
        ["CRP 101", "Fundamentals of Crop Physiology", "2+1"],
        ["FSN 111", "Principles of Food Science and Nutrition", "1+1"],
        ["HOR 112", "Production Technology for Fruit and Plantation Crops", "1+1"],
        ["RSG 101", "Geo-informatics for Precision Farming", "1+0"],
        ["SWE 112", "Soil and Water Conservation Engineering", "1+1"]
      ],
      "III": [
        ["AEC 201", "Farm Management, Production and Resource Economics", "1+1"],
        ["AEN 201", "Fundamentals of Entomology", "2+1"],
        ["AGR 201", "Crop Production Technology - I (Kharif Crops)", "1+1"],
        ["AMP 201", "Livestock and Poultry Management", "2+1"],
        ["ENS 201", "Environmental Studies and Disaster Management", "2+1"],
        ["FMP 211", "Farm Machinery and Power", "1+1"],
        ["HOR 211", "Production Technology for Vegetables and Spices", "1+1"],
        ["PAT 201", "Fundamentals of Plant Pathology", "2+1"],
        ["SAC 201", "Soil Resource Inventory", "1+1"],
        ["SST 201", "Principles of Seed Technology", "2+1"]
      ],
      "IV": [
        ["AEN 202", "Management of Beneficial and Harmful Insects", "2+1"],
        ["AEX 201", "Communication Skills and Personality Development", "1+1"],
        ["AGR 203", "Crop Production Technology - II (Rabi Crops)", "1+1"],
        ["AGR 204", "Farming System and Sustainable Agriculture", "1+1"],
        ["ANM 201", "Introductory Nematology", "0+1"],
        ["ERG 211", "Renewable Energy and Green Technology", "1+1"],
        ["HOR 212", "Production Technology for Ornamental Crops, MAP and Landscaping", "1+1"],
        ["NST 201", "Fundamentals and Applications of Nanotechnology", "1+0"],
        ["PAT 202", "Principles of Integrated Plant Disease Management", "1+1"],
        ["PBG 201", "Fundamentals of Genetics", "2+1"],
        ["SAC 202", "Problematic Soils and their Management", "2+0"],
        ["STA 201", "Statistical Methods", "1+1"]
      ],
      "V": [
        ["AEC 301", "Agricultural Marketing, Trade and Prices", "2+1"],
        ["AEN 301", "Pests of Field Crops and Stored Produces and their Management", "1+1"],
        ["AGM 301", "Agricultural Microbiology", "1+1"],
        ["AGR 301", "Practical Crop Production - I (Kharif Crops)", "0+2"],
        ["AGR 302", "Rainfed Agriculture and Watershed Management", "1+1"],
        ["APE 311", "Protected Cultivation and Secondary Agriculture", "1+1"],
        ["ARM 301", "Entrepreneurship Development and Business Management", "1+1"],
        ["HOR 311", "Post Harvest Management and Value Addition of Fruits and Vegetable Crops", "1+1"],
        ["PAT 301", "Diseases of Field and Horticultural Crops and their Management - I", "1+1"],
        ["PBG 301", "Fundamentals of Plant Breeding", "2+1"],
        ["SAC 301", "Manures, Fertilizers and Soil Fertility Management", "2+1"]
      ],
      "VI": [
        ["ABT 301", "Plant Biotechnology", "2+1"],
        ["AEC 302", "Agricultural Finance and Co-operation", "2+1"],
        ["AEN 302", "Pests of Horticultural Crops and Stored Produces and their Management", "1+1"],
        ["AGR 303", "Practical Crop Production - II (Rabi Crops)", "0+2"],
        ["AGR 304", "Principles of Organic Farming", "1+1"],
        ["COM 311", "Agro Informatics", "1+1"],
        ["ENS 301", "Environmental Pollution and Management", "1+1"],
        ["PAT 302", "Diseases of Field and Horticultural Crops and their Management - II", "2+1"],
        ["PBG 302", "Crop Improvement", "2+1"],
        ["SAC 353", "Soilless Crop Production", "1+1"]
      ],
      "VII": [
        ["AEX 401", "Rural Agricultural Work Experience and Agro-industrial Attachment (Student READY)", "0+20"]
      ],
      "VIII": [
        ["AEC 451", "Data Analytical Skills for Market Research", "0+10"],
        ["APW 401", "Project Report Preparation, Presentation and Evaluation", "0+1"],
        ["ARM 453", "Agricultural Export and Import Management", "0+10"]
      ]
    },
    "B.Sc. (Hons.) Horticulture": {
      "I": [
        ["AGM 121", "Introductory Microbiology", "2+1"],
        ["BIC 101", "Fundamentals of Plant Biochemistry", "2+1"],
        ["ENG 101", "Comprehension and Communication Skills in English", "1+1"],
        ["FSC 101", "Principles of Horticulture", "2+1"],
        ["FSC 102", "Plant Propagation and Nursery Management", "1+1"],
        ["MAT 111", "Elementary Mathematics", "1+1"],
        ["SAC 101", "Fundamentals of Soil Science", "2+1"],
        ["VSC 101", "Botany of Horticultural Crops", "1+1"]
      ],
      "II": [
        ["AGR 102", "Introductory Agro-meteorology and Climate Change", "1+1"],
        ["CRP 112", "Introductory Crop Physiology", "2+1"],
        ["FSC 103", "Tropical and Subtropical Fruits", "2+1"],
        ["FSN 121", "Fundamentals of Food Technology", "1+1"],
        ["PBG 112", "Principles of Genetics and Cytogenetics", "2+1"],
        ["PSM 101", "Spices and Condiments", "1+1"],
        ["SAC 102", "Irrigation Water Quality Assessment", "0+1"],
        ["SWE 112", "Soil and Water Conservation Engineering", "1+1"],
        ["VSC 102", "Tropical and Subtropical Vegetable Crops", "2+1"]
      ],
      "III": [
        ["AEN 201", "Fundamentals of Entomology", "2+1"],
        ["AMP 201", "Livestock and Poultry Management", "2+1"],
        ["ENS 201", "Environmental Studies and Disaster Management", "2+1"],
        ["FLG 201", "Commercial Floriculture", "2+1"],
        ["FSC 201", "Temperate Fruit Crops", "1+0"],
        ["PAT 211", "Principles of Plant Pathology", "2+1"],
        ["PBG 211", "Principles of Plant Breeding", "2+1"],
        ["PSM 201", "Plantation Crops", "1+1"],
        ["SST 221", "Principles of Seed Production and Quality Regulations in Horticultural Crops", "1+1"],
        ["VSC 201", "Temperate Vegetable Crops", "1+0"],
        ["VSC 202", "Crop Production - I", "0+1"]
      ],
      "IV": [
        ["AEC 202", "Economics and Marketing", "2+1"],
        ["AEN 212", "Apiculture, Sericulture and Lac Culture", "1+1"],
        ["AEX 201", "Communication Skills and Personality Development", "1+1"],
        ["AGR 211", "Weed and Water Management in Horticultural Crops", "1+1"],
        ["FLG 202", "Ornamental Horticulture", "1+1"],
        ["FMP 211", "Farm Machinery and Power", "1+1"],
        ["FSC 202", "Breeding of Fruit and Plantation Crops", "1+1"],
        ["FSC 203", "Dryland Horticulture", "1+1"],
        ["NST 201", "Fundamentals and Applications of Nanotechnology", "1+0"],
        ["PSM 202", "Medicinal and Aromatic Crops", "1+1"],
        ["STA 201", "Statistical Methods", "1+1"],
        ["VSC 203", "Crop Production - II (Vegetables -Transplanted Crops)", "0+1"]
      ],
      "V": [
        ["AEN 311", "Insect Pests of Vegetable, Ornamental and Spice Crops", "1+1"],
        ["AGR 311", "Introduction to Major Field Crops", "1+1"],
        ["ANM 311", "Nematode Pests of Horticultural Crops and their Management", "1+1"],
        ["ARM 301", "Entrepreneurship Development and Business Management", "1+1"],
        ["CRP 321", "Growth and Development of Horticultural Crops", "1+1"],
        ["FLG 301", "Principles of Landscape Architecture", "1+1"],
        ["FOR 311", "Introductory Agro-Forestry", "0+1"],
        ["FSN 311", "Processing of Horticultural Crops", "1+1"],
        ["PAT 311", "Diseases of Vegetable, Ornamental and Spice Crops", "1+1"],
        ["SAC 301", "Manures, Fertilizers and Soil Fertility Management", "2+1"],
        ["VSC 301", "Breeding of Vegetable, Tuber, Spice, Flower and Medicinal Crops", "2+1"]
      ],
      "VI": [
        ["ABT 312", "Biotechnology of Horticultural Crops", "2+1"],
        ["AEN 312", "Insect Pests of Fruit, Plantation, Medicinal and Aromatic Crops", "1+1"],
        ["AEX 311", "Fundamentals of Extension Education", "2+1"],
        ["AGM 321", "Soil and Applied Microbiology", "1+1"],
        ["AGR 313", "Organic Farming", "1+1"],
        ["ARM 324", "Horti-Business Management", "2+0"],
        ["COM 311", "Agro-informatics", "1+1"],
        ["FSC 301", "Post Harvest Management of Horticultural Crops", "2+1"],
        ["PAT 312", "Diseases of Fruits, Plantations, Medicinal and Aromatic Crops", "1+1"],
        ["SST 321", "Seed Production Techniques in Horticultural Crops", "1+1"],
        ["VSC 302", "Precision Farming and Protected Cultivation", "2+1"]
      ],
      "VII": [
        ["AEX 411", "Rural Horticultural Work Experience and Agro-industrial Attachment (Student READY)", "0+20"]
      ],
      "VIII": [
        ["HOR 401", "Project Work", "0+1"],
        ["HOR 458", "Commercial Ornamental and Medicinal Plants Production", "0+10"],
        ["PAT 452", "Commercial Mushroom Production", "0+10"]
      ]
    },
    "B.Sc. (Hons.) Agri Business Management": {
      "I": [
        ["MAT 111", "Elementary Mathematics", "1+1"],
        ["ENG 102", "English for Business Communication", "1+1"],
        ["ENS 101", "Environmental Sciences and Disaster management", "2+1"],
        ["ARM 101", "Introduction to Agribusiness Management", "2+0"],
        ["ARM 102", "Agricultural Marketing and Price Analysis", "2+1"],
        ["ARM 103", "Fundamentals of Human Resource Management", "2+1"],
        ["ARM 104", "Introduction to Managerial Economics", "2+1"]
      ],
      "II": [
        ["SAC 101", "Fundamentals of Soil Science", "2+1"],
        ["FSN 111", "Principles of Food Science and Nutrition", "1+1"],
        ["AGR 114", "Crop Production Technology", "1+1"],
        ["HOR 112", "Production Technology of Fruit and Plantation Crops", "1+1"],
        ["SWE 112", "Soil and Water Conservation Engineering", "1+1"],
        ["ARM 105", "Introduction to Operations Management", "2+1"],
        ["ARM 106", "Business Communication", "0+1"],
        ["ARM 107", "Management Accounting", "1+1"],
        ["ARM 108", "Fundamentals of Marketing Management", "2+1"],
        ["ARM 109", "Introduction to Organizational Behaviour", "2+0"]
      ],
      "III": [
        ["AEC 201", "Farm Management, Production and Resource Economics", "1+1"],
        ["PBG 214", "Principles of Genetics and Methods of Plant Breeding", "2+1"],
        ["AEN 221", "Fundamentals of Entomology & Pest management", "2+1"],
        ["AGM 221", "General and Applied Microbiology", "2+1"],
        ["FMP 211", "Farm Power and Machinery", "1+1"],
        ["AMP 201", "Livestock and Poultry Management", "2+1"],
        ["SST 201", "Principles of Seed Technology", "2+1"],
        ["HOR 211", "Production Technology of Vegetables and Spices", "1+1"],
        ["ARM 201", "Fundamentals of Financial Management", "2+1"]
      ],
      "IV": [
        ["PAT 222", "Introductory Plant Pathology", "1+1"],
        ["MAT 222", "Operations Research", "2+1"],
        ["STA 201", "Statistical Methods", "1+1"],
        ["HOR 212", "Production Technology of ornamental crops, MAP and landscaping", "1+1"],
        ["AGR 204", "Farming System and Sustainable agriculture", "1+1"],
        ["FOR 211", "Forest Products and Commercial Utilization", "1+1"],
        ["ERG 211", "Renewable Energy & Green technology", "1+1"],
        ["ARM 203", "Agricultural Marketing Institutions", "2+1"],
        ["ARM 204", "Agribusiness Environment Analysis", "1+1"],
        ["ARM 205", "Financial Services", "2+0"],
        ["ARM 206", "Rural Marketing", "1+1"],
        ["ARM 207", "Microfinance", "1+0"]
      ],
      "V": [
        ["ABT 301", "Plant Biotechnology", "2+1"],
        ["AEC 303", "Econometric Modeling", "1+1"],
        ["TIP 301", "International Trade", "1+1"],
        ["ARM 302", "Project Management", "2+1"],
        ["ARM 303", "Entrepreneurship and Small Business Management", "2+1"],
        ["ARM 304", "Supply Chain Management", "2+0"],
        ["ARM 305", "E- Business", "2+0"],
        ["ARM 306", "Enterprise Resource Planning", "2+1"],
        ["ARM 307", "Business Analytics", "1+1"],
        ["ARM 308", "Introduction to Business Law and Taxation", "2+0"]
      ],
      "VI": [
        ["SAC 355", "Crop and Pesticide Chemistry", "1+1"],
        ["PAT 321", "Diseases of Crop Plants and their Management", "1+1"],
        ["COM 311", "Applied Agro-Informatics", "1+1"],
        ["APE 311", "Post Harvest and Food Engineering", "1+1"],
        ["TIP 302", "Intellectual Property Rights", "1+0"],
        ["AGR 304", "Principles of Organic Farming", "1+1"],
        ["AEX 313", "Fundamentals of Extension Education", "2+1"],
        ["ARM 309", "Introduction to Capital and Commodity Markets", "2+1"],
        ["ARM 310", "Retailing Management", "2+1"],
        ["ARM 311", "Business Research Methods", "2+1"],
        ["NCC 101", "National Cadet Corps", "0+1"],
        ["OPT", "Optional course", "1+1"]
      ],
      "VII": [
        ["ABWE", "Agribusiness Work Experience and Industry Internship (ABWE &II)", "0+20"],
        ["ARM 401", "Project Report Preparation, Presentation and Evaluation", "0+1"]
      ],
      "VIII": [
        ["ELP 1", "Module-I", "0+10"],
        ["ELP 2", "Module-II", "0+10"]
      ]
    },
    "B.Tech. (Agricultural Engineering)": {
      "I": [
        ["AGR 111", "Principles of Agronomy", "1+1"],
        ["BAE 101", "Surveying and Leveling", "1+2"],
        ["BAE 102", "Engineering Mechanics", "2+1"],
        ["BAE 103", "Engineering Drawing", "0+2"],
        ["MAT 103", "Engineering Mathematics - I", "2+1"],
        ["PHY 101", "Engineering Physics", "2+1"],
        ["SAC 111", "Principles of Soil Science", "2+1"],
        ["SAC 121", "Engineering Chemistry", "1+1"]
      ],
      "II": [
        ["BAE 104", "Strength of Materials", "1+1"],
        ["BAE 105", "Soil Mechanics", "1+1"],
        ["BAE 106", "Workshop Technology and Practices", "1+2"],
        ["BAE 107", "Theory of Machines", "1+1"],
        ["BAE 108", "Heat and Mass Transfer", "1+1"],
        ["COM 107", "Web Designing and Internet Applications", "1+1"],
        ["ENS 102", "Environmental Sciences and Disaster Management", "2+1"],
        ["HOR 113", "Principles of Horticultural Crops and Plant Protection", "1+1"],
        ["MAT 104", "Engineering Mathematics - II", "2+1"]
      ],
      "III": [
        ["BAE 201", "Theory of Structures", "1+1"],
        ["BAE 202", "Fluid Mechanics and Open Channel Hydraulics", "2+1"],
        ["BAE 203", "Machine Design", "1+1"],
        ["BAE 204", "Refrigeration and Air Conditioning", "1+1"],
        ["BAE 205", "Electrical Machines and Power Utilization", "2+1"],
        ["BAE 206", "Thermodynamics", "2+1"],
        ["COM 211", "Computer Programming and Data Structures", "1+1"],
        ["MAT 202", "Engineering Mathematics - III", "2+1"],
        ["PFE 201", "Engineering Properties of Agricultural Produce", "1+1"],
        ["SWE 201", "Watershed Hydrology", "1+1"]
      ],
      "IV": [
        ["AEX 201", "Communication Skills and Personality Development", "1+1"],
        ["BAE 207", "Applied Electronics and Instrumentation", "2+1"],
        ["BAE 208", "Building Construction and Cost Estimation", "2+1"],
        ["BAE 209", "Auto CAD Applications", "0+2"],
        ["FMP 201", "Tractor and Automotive Engines", "2+1"],
        ["IDE 201", "Irrigation Engineering", "2+1"],
        ["IDE 202", "Groundwater, Wells and Pumps", "2+1"],
        ["PFE 202", "Post-Harvest Engineering of Cereals, Pulses and Oil Seeds", "2+1"],
        ["REE 201", "Fundamentals of Renewable Energy Sources - Solar and Wind Energy", "2+1"]
      ],
      "V": [
        ["ARM 301", "Entrepreneurship Development and Business Management", "1+1"],
        ["FMP 301", "Tractor Systems and Controls", "2+1"],
        ["FMP 302", "Farm Machinery and Equipment - I", "2+1"],
        ["PFE 301", "Post Harvest Engineering of Horticultural Crops", "1+1"],
        ["PFE 302", "Dairy and Food Engineering", "2+1"],
        ["REE 301", "Alternate Renewable Power Sources", "2+1"],
        ["SWE 301", "Soil and Water Conservation Engineering", "2+1"],
        ["SWE 302", "Watershed Planning and Management", "1+1"]
      ],
      "VI": [
        ["AGE 302", "Project Planning and Report Writing - I (Students READY)", "0+5"],
        ["FMP 303", "Farm Machinery and Equipment - II", "2+1"],
        ["FMP 304", "Tractor and Farm Machinery Operation and Maintenance", "0+2"],
        ["IDE 301", "Drainage Engineering", "1+1"],
        ["IDE 302", "Sprinkler and Micro Irrigation Systems", "1+1"],
        ["PFE 303", "Agricultural Structures and Environmental Control", "2+1"],
        ["REE 302", "Bio-energy Systems: Design and Applications", "2+1"],
        ["SWE 303", "Water Harvesting and Soil Conservation Structures", "2+1"]
      ],
      "VII": [
        ["AGE 401", "Project Planning and Report Writing- II (Student READY)", "0+5"],
        ["AGE 402", "Experiential Learning on Campus (Student READY)", "0+10"],
        ["FMP 402", "Farm Machinery Design and Production", "2+1"],
        ["REE 402", "Waste and By-Products Utilization", "2+1"],
        ["SWE 401", "Remote Sensing and GIS Applications", "2+1"]
      ],
      "VIII": [
        ["AGE 201", "In-Plant Training - I (Students READY)", "0+2"],
        ["AGE 301", "In-Plant Training - II (Students READY)", "0+2"],
        ["AGE 403", "Industrial Attachment and Internship (Student READY)", "0+16"]
      ]
    },
    "B.Tech. (Energy and Environmental Engineering)": {
      "I": [
        ["AGR 115", "Crop Production Technology", "2+1"],
        ["AST 101", "Engineering Drawing and Graphics", "1+2"],
        ["COM 102", "Computer Programming and Data Structures", "1+2"],
        ["ENG 101", "Comprehension and Communication Skills in English", "1+1"],
        ["FMP 111", "Workshop Technology", "1+2"],
        ["MAT 101", "Engineering Mathematics - I", "1+1"],
        ["PHY 101", "Engineering Physics", "2+1"]
      ],
      "II": [
        ["AST 102", "Principles of Engineering Mechanics", "1+1"],
        ["BIC 102", "General Biochemistry", "2+1"],
        ["ENS 102", "Environmental Sciences and Disaster Management", "2+1"],
        ["FMP 112", "Basic Electrical Engineering", "2+1"],
        ["FMP 113", "Thermodynamics", "2+1"],
        ["FPE 102", "Heat and Mass Transfer", "2+1"],
        ["MAT 102", "Engineering Mathematics - II", "1+1"],
        ["SWE 111", "Field Surveying and Leveling", "2+1"]
      ],
      "III": [
        ["AST 201", "Mechanics of Materials", "2+1"],
        ["ERG 201", "Biochemical Engineering", "2+1"],
        ["FMP 212", "Basic Electronics Engineering", "2+1"],
        ["FMP 213", "Basic Theory of Machines", "2+1"],
        ["FPE 202", "Refrigeration and Cold Chain", "2+1"],
        ["MAT 203", "Differential Equations and Transform Theories", "2+1"],
        ["RSG 202", "Remote Sensing and GIS in Environmental Applications", "2+1"],
        ["SWE 211", "Fluid Mechanics", "2+1"]
      ],
      "IV": [
        ["AEC 202", "Economics and Marketing", "2+1"],
        ["AEX 201", "Communication Skills and Personality Development", "1+1"],
        ["BAE 208", "Building Construction and Cost Estimation", "2+1"],
        ["ERG 202", "Fossil Fuel Engineering", "2+0"],
        ["FMP 214", "Instrumentation and Process Control", "2+1"],
        ["FMP 215", "Machine Design and Drawing", "1+1"],
        ["FOR 222", "Forest Energy Resources", "2+0"],
        ["MAT 204", "Numerical Methods and Biostatistics", "2+1"],
        ["NST 201", "Fundamentals and Applications of Nanotechnology", "1+0"],
        ["SWE 212", "Sustainability and Green Engineering", "2+0"]
      ],
      "V": [
        ["ARM 301", "Entrepreneurship Development and Business Management", "1+1"],
        ["ERG 301", "Heat Power Engineering", "2+1"],
        ["ERG 302", "Thermo Chemical Conversion Technology", "2+1"],
        ["ERG 303", "Solar Energy Engineering", "2+1"],
        ["ERG 304", "Biochemical Conversion Technology", "2+1"],
        ["STA 301", "Engineering Statistics", "1+1"],
        ["SWE 311", "Water Pollution Control Engineering", "2+1"],
        ["SWE 312", "Hydrology and Water Resources", "2+1"],
        ["SWE 313", "Public Health Engineering", "2+1"]
      ],
      "VI": [
        ["EEE 301", "Research Project - I (Students READY)", "0+2"],
        ["EEE 302", "Semesteresterinar (Students READY)", "0+1"],
        ["ENS 312", "Environmental Chemistry", "2+1"],
        ["ERG 305", "Wind Energy Systems", "2+1"],
        ["ERG 306", "Energy Auditing and Management", "2+1"],
        ["ERG 307", "Power Plant Engineering", "2+1"],
        ["SWE 314", "Wastewater Engineering", "2+1"],
        ["SWE 315", "Solid and Hazardous Waste Management", "2+0"],
        ["SWE 316", "Air Pollution and Control Engineering", "2+0"],
        ["SWE 317", "Environmental Impact Assessment", "1+1"]
      ],
      "VII": [
        ["ARM 411", "Project Preparation and Management", "1+1"],
        ["EEE 401", "Research Project - II (Student READY)", "0+3"],
        ["ERG 401", "Emerging Technologies in Energy and Environmental Engineering", "2+0"],
        ["EXP 403", "Experiential Learning - I (Student READY) - Renewable Power Generation Technologies", "0+7"],
        ["EXP 404", "Experiential Learning - II (Student READY) - Pollution Management Engineering", "0+7"]
      ],
      "VIII": [
        ["EEE 404", "Industrial Internship Programme (Students READY)", "0+20"]
      ]
    },
    "B.Tech. (Food Technology)": {
      "I": [
        ["AGR 115", "Crop Production Technology", "2+1"],
        ["AST 101", "Engineering Drawing and Graphics", "1+2"],
        ["COM 102", "Computer Programming and Data Structures", "1+2"],
        ["ENG 101", "Comprehension and Communication Skills in English", "1+1"],
        ["FMP 111", "Workshop Technology", "1+2"],
        ["FPE 101", "Fundamentals of Food Processing", "2+1"],
        ["MAT 101", "Engineering Mathematics - I", "1+1"]
      ],
      "II": [
        ["BIC 112", "Food Chemistry of Macronutrients", "2+1"],
        ["COM 103", "ICT Applications in Food Industry", "1+2"],
        ["ENS 102", "Environmental Sciences and Disaster Management", "2+1"],
        ["FMP 112", "Basic Electrical Engineering", "2+1"],
        ["FMP 113", "Thermodynamics", "2+1"],
        ["FPE 102", "Heat and Mass Transfer", "2+1"],
        ["FSN 112", "Food Additives and Preservatives", "1+1"],
        ["MAT 102", "Engineering Mathematics - II", "1+1"]
      ],
      "III": [
        ["AGM 223", "Food Microbiology", "2+1"],
        ["BIC 211", "Food Chemistry of Micronutrients", "2+1"],
        ["FMP 212", "Basic Electronics Engineering", "2+1"],
        ["FPE 201", "Post Harvest Engineering", "2+1"],
        ["FPE 202", "Refrigeration and Cold Chain", "2+1"],
        ["FPE 203", "Unit Operations in Food Processing - I", "2+1"],
        ["MAT 201", "Statistical Methods and Numerical Analysis", "2+1"],
        ["SWE 211", "Fluid Mechanics", "2+1"]
      ],
      "IV": [
        ["ABT 211", "Food Biotechnology and Its Applications", "2+1"],
        ["AEX 201", "Communication Skills and Personality Development", "1+1"],
        ["AMP 211", "Processing Technology of Dairy Products", "1+1"],
        ["ARM 211", "Business Management and Economics", "2+0"],
        ["BIC 212", "Food Biochemistry and Nutrition", "2+1"],
        ["FMP 214", "Instrumentation and Process Control", "2+1"],
        ["FPE 204", "Unit Operations in Food Processing - II", "2+1"],
        ["FPE 205", "Processing Technology of Cereals", "2+1"],
        ["FPE 206", "Processing Technology of Legumes and Oilseeds Products", "2+1"]
      ],
      "V": [
        ["AGM 313", "Industrial Microbiology", "2+1"],
        ["ARM 321", "Entrepreneurship Development", "2+1"],
        ["FPE 301", "Processing Technology of Liquid Milk", "2+1"],
        ["FPE 302", "Processing of Meat and Poultry Products", "2+1"],
        ["FPE 303", "Food Process Equipment Design", "2+1"],
        ["FPE 304", "Processing of Spices and Plantation Crops", "2+1"],
        ["FSN 314", "Processing Technology of Fruits and Vegetables", "2+1"],
        ["FSN 315", "Bakery, Confectionery and Snack Products", "2+1"]
      ],
      "VI": [
        ["ARM 312", "Marketing Management and International Trade", "2+0"],
        ["BIC 311", "Instrumental Techniques in Food Analysis", "1+1"],
        ["FPE 305", "Food Packaging Technology and Equipment", "2+1"],
        ["FPE 306", "Processing of Fish and Marine Products", "2+1"],
        ["FPE 307", "Food Storage Engineering", "2+1"],
        ["FPE 308", "Food Plant Sanitation", "1+1"],
        ["FPE 309", "Research Project - I (Students READY)", "0+2"],
        ["FSN 316", "Processing Technology of Beverages", "2+1"],
        ["FSN 317", "Sensory Evaluation and Food Products", "2+1"]
      ],
      "VII": [
        ["ARM 411", "Project Preparation and Management", "1+1"],
        ["EXP 401", "Experiential Learning - I (Student READY) - Processing of Dairy, Fruits and Vegetable Products", "0+7"],
        ["EXP 402", "Experiential Learning - II (Student READY) - Processing of Grains, Bakery and Confectionery Products", "0+7"],
        ["FPE 401", "Research Project - II (Student READY)", "0+3"],
        ["FPE 402", "Seminar (Student READY)", "0+1"],
        ["FSN 411", "Food Quality, Safety Standards and Certification", "2+0"]
      ],
      "VIII": [
        ["FPE 405", "Industrial Internship (Students READY)", "0+20"]
      ]
    },
    "B.Tech. (Agricultural Information Technology)": {
      "I": [
        ["COM 131", "Fundamentals of Computers", "1+1"],
        ["COM 132", "Programming in C", "2+1"],
        ["COM 133", "Operating System", "2+1"],
        ["ENS 102", "Environmental Sciences and Disaster Management", "2+1"],
        ["PHY 152", "Basic Electronics", "2+1"],
        ["MAT 103", "Engineering Mathematics I", "2+1"],
        ["SAC 101", "Fundamentals of Soil Science", "2+1"],
        ["ENG 101", "Comprehension and Communication Skills in English", "1+1"]
      ],
      "II": [
        ["COM 134", "Data Structures and Algorithms using C", "2+1"],
        ["COM 135", "Object Oriented Programming", "2+1"],
        ["COM 136", "Computer Organization and Architecture", "2+1"],
        ["SWE 112", "Soil and Water Conservation Engineering", "1+1"],
        ["AGR 114", "Crop Production Technology", "1+1"],
        ["CRP 111", "Plant Physiology", "2+1"],
        ["AEX 102", "Fundamentals of Agricultural Extension Education", "2+1"],
        ["MAT 104", "Engineering Mathematics II", "2+1"]
      ],
      "III": [
        ["COM 231", "Database Management Systems", "2+1"],
        ["COM 232", "Software Engineering", "2+0"],
        ["COM 233", "Computer Networks", "2+1"],
        ["COM 234", "R Programming", "2+1"],
        ["AEN 221", "Fundamentals of Entomology and Pest Management", "2+1"],
        ["BTH 221", "Production Technology of Commercial Horticulture Crops", "1+1"],
        ["RSG 231", "Remote Sensing and its Applications in Agriculture", "2+1"],
        ["MAT 202", "Engineering Mathematics III", "2+1"]
      ],
      "IV": [
        ["COM 235", "Web Technology", "1+2"],
        ["COM 236", "Data Mining and Warehousing", "2+1"],
        ["COM 237", "Multimedia and Animation", "2+1"],
        ["COM 238", "Java Programming", "2+1"],
        ["AMT 201", "Fundamentals of Agricultural Meteorology", "2+1"],
        ["AEC 202", "Economics and Marketing", "2+1"],
        ["RSG 232", "Geographic Information System and its Applications in Agriculture", "2+1"],
        ["BAE 231", "Fundamentals of Agricultural Engineering", "2+1"],
        ["STA 201", "Statistical Methods", "1+1"]
      ],
      "V": [
        ["COM 331", "Mobile Computing and App Development", "2+1"],
        ["COM 332", "Digital Image Processing", "2+1"],
        ["COM 333", "Cyber Security", "2+0"],
        ["COM 334", "Python Programming", "2+1"],
        ["ARM 301", "Entrepreneurship Development and Business Management", "1+1"],
        ["ARM 306", "Enterprise Resource Planning", "2+1"],
        ["AEC 303", "Econometric Modelling", "1+1"],
        ["FMP 331", "Basic Instrumentation and their Application in Automation", "1+1"],
        ["STA 302", "Probability and Random Process", "2+1"]
      ],
      "VI": [
        ["COM 335", "Artificial Intelligence and Machine Learning", "2+1"],
        ["COM 336", "Internet of Things (IoT)", "2+1"],
        ["COM 337", "Big Data Analytics", "2+1"],
        ["COM 338", "Advanced Automation and Sensor Technology", "2+1"],
        ["COM 339", "Cloud Computing", "2+1"],
        ["ARM 309", "Introduction to Capital and Commodity Markets", "2+1"],
        ["AMT 301", "Introduction to Crop Yield and Weather Forecasting Models", "1+1"],
        ["TIP 301", "Intellectual Property Rights", "1+0"],
        ["COM 340", "Research Project- I (Students READY)", "0+2"]
      ],
      "VII": [
        ["COM 431", "Business Intelligence", "2+1"],
        ["COM 433", "Research Project - II (Students READY)", "0+3"],
        ["COM 434", "Seminar (Students READY)", "0+1"]
      ],
      "VIII": [
        ["COM 445", "Internship (Students READY)", "0+20"]
      ]
    },
    "B.Tech. (Biotechnology)": {
      "I": [
        ["MAT 112", "Basic Mathematics – I (Remedial course)", "2+1"],
        ["BTB 101", "Introduction to Biotechnology", "2+1"],
        ["BTB 102", "Cell Biology", "1+1"],
        ["AGR 114", "Crop Production Technology", "1+1"],
        ["PBG 111", "Basic Genetics", "2+1"],
        ["FSN 112", "Food Science and Processing", "1+1"],
        ["ENG 101", "Comprehension and Communication Skills in English", "1+1"],
        ["ENS 101", "Environmental Studies and Disaster Management", "2+1"]
      ],
      "II": [
        ["MAT 113", "Basic Mathematics – II (Remedial course)", "2+1"],
        ["BTB 103", "Molecular Biology", "2+1"],
        ["BIF 101", "Introductory Bioinformatics", "1+1"],
        ["COM 112", "Information and Communication Technology", "1+1"],
        ["BIC 102", "General Biochemistry", "2+1"],
        ["AGM 111", "Microbiology", "2+1"],
        ["SAC 101", "Fundamentals of Soil Science", "2+1"],
        ["CRP 111", "Plant Physiology", "2+1"],
        ["PHY 102", "Biophysics", "1+1"]
      ],
      "III": [
        ["BTB 201", "Recombinant DNA Technology", "2+1"],
        ["BTB 202", "Plant Tissue Culture", "1+1"],
        ["BIF 211", "Computational Biology", "2+1"],
        ["MAT 211", "Biomathematics", "2+1"],
        ["AEN 221", "Fundamentals of Entomology and Pest Management", "2+1"],
        ["PBG 212", "Classical and Molecular Cytogenetics", "1+1"],
        ["PAT 251", "Fundamentals of Plant Pathology and Nematology and Disease management", "2+1"],
        ["AGM 211", "Microbial Genetics", "1+1"],
        ["BTH 221", "Production Technology of Horticultural Crops", "2+1"]
      ],
      "IV": [
        ["BTB 203", "Electronics and Instrumentation in Biotechnology", "1+1"],
        ["BTB 204", "Molecular Genetics", "2+0"],
        ["BTB 205", "Plant Genetic Transformation", "1+1"],
        ["BTB 206", "Bioprospecting of Molecules and Genes", "1+1"],
        ["BTB 207", "Immunology", "2+1"],
        ["BTB 208", "Fundamentals of Molecular Pharming and Biopharmaceuticals", "1+1"],
        ["STA 201", "Statistical Methods", "1+1"],
        ["AEC 202", "Economics and Marketing", "2+1"],
        ["AEX 201", "Communication Skills and Personality Development", "1+1"],
        ["NST 201", "Fundamentals and Applications of Nanotechnology", "1+0"],
        ["PBG 213", "Basics of Plant Breeding", "2+1"],
        ["SST 201", "Seed Biology, Production and Management", "1+1"]
      ],
      "V": [
        ["BTB 301", "Molecular Marker Technology", "2+1"],
        ["BTB 302", "Genomics and Proteomics", "1+1"],
        ["BTB 303", "Molecular Ecology and Evolution", "1+1"],
        ["BIC 301", "Enzymology and Enzyme Technologies", "2+1"],
        ["AGM 311", "Food Biotechnology", "1+1"],
        ["AMP 301", "Animal Biotechnology", "2+1"],
        ["COM 311", "Agro-informatics", "1+1"],
        ["PBG 311", "Breeding of Field and Horticultural Crops", "1+1"],
        ["ARM 301", "Entrepreneurship Development and Business Management", "1+1"],
        ["ENS 311", "Biodiversity and its Conservation", "1+1"]
      ],
      "VI": [
        ["BTB 304", "Biosafety and Bioethics", "1+0"],
        ["TIP 351", "Intellectual Property Rights and Applications in Biotechnology", "1+0"],
        ["AGM 312", "Microbial Biotechnology", "1+1"],
        ["STA 323", "Biostatistics", "1+1"],
        ["BTB 305 / COM 313", "Plant Tissue Culture and its Applications / Programming for Bioinformatics", "2+1"],
        ["BTB 306 / BIF 304", "Principles and Applications of Plant Genetic Transformation / Pharmacogenomics", "2+1"],
        ["BTB 307 / BIF 307", "Applications of Genomics and Proteomics / Metabolomics and System Biology", "2+1"],
        ["BTB 308 / BIF 351", "Molecular Breeding in Field Crops / Bioinformatics Tools and Biological Databases", "2+1"],
        ["BTB 309 / BIF 352", "Molecular Breeding of Horticultural Crops and Forest Trees / Structural Bioinformatics", "2+1"],
        ["BTB 310 / STA 325", "Epigenetics and Gene Regulation / Computational Methods for Data Analysis", "2+1"]
      ],
      "VII": [
        ["BTB 401", "Student READY - Skill Development Module (Biotechnology Work experience in Industry and Institutes) - Plant biotechnology area", "0+20"]
      ],
      "VIII": [
        ["BTB 403", "Student READY - Project Formulation, Execution and Presentation", "0+10"],
        ["EDM", "Entrepreneurial Development Module - Biotechnology (Elective) / Bioinformatics (Elective)", "0+10"]
      ]
    },
    "B.Tech. (Bioinformatics)": {
      "I": [
        ["COM 132", "Programming in C", "2+1"],
        ["COM 133", "Operating System", "2+1"],
        ["MAT 111", "Elementary Mathematics", "1+1"],
        ["BTB 101", "Introduction to Biotechnology", "2+1"],
        ["BTB 102", "Cell Biology", "1+1"],
        ["PBG 111", "Basic Genetics", "2+1"],
        ["AGR 114", "Crop Production Technology", "1+1"],
        ["ENS 101", "Environmental Studies and Disaster Management", "2+1"],
        ["ENG 101", "Comprehension & Communication Skills in English", "1+1"]
      ],
      "II": [
        ["BIF 101", "Introductory Bioinformatics", "1+1"],
        ["BIF 102", "Biological databases", "1+1"],
        ["BTB 103", "Molecular Biology", "2+1"],
        ["COM 134", "Data Structures and Algorithms using C", "2+1"],
        ["PHY 102", "Biophysics", "1+1"],
        ["CRP 111", "Plant Physiology", "2+1"],
        ["AGM 111", "Microbiology", "2+1"],
        ["BIC 102", "General Biochemistry", "2+1"]
      ],
      "III": [
        ["BIF 201", "Macromolecular structures", "2+0"],
        ["BTB 201", "Recombinant DNA Technology", "2+1"],
        ["COM 231", "Database Management systems", "2+1"],
        ["COM 233", "Computer Networks", "2+1"],
        ["COM 234", "R Programming", "2+1"],
        ["PBG 212", "Classical and Molecular Cytogenetics", "1+1"],
        ["AGM 211", "Microbial Genetics", "1+1"],
        ["AEN 221", "Fundamentals of Entomology and Pest management", "2+1"],
        ["PAT 251", "Fundamentals of Plant Pathology, Nematology and disease management", "2+1"]
      ],
      "IV": [
        ["BIF 202", "Methods in Bioinformatics", "2+0"],
        ["BTB 207", "Immunology", "2+1"],
        ["COM 235", "Web Technology", "1+2"],
        ["COM 236", "Data mining and warehousing", "2+1"],
        ["COM 238", "JAVA Programming", "2+1"],
        ["STA 201", "Statistical methods", "1+1"],
        ["PBG 213", "Basics of Plant Breeding", "2+1"],
        ["AEX 201", "Communication Skills and Personality Development", "1+1"],
        ["AEC 202", "Economics and marketing", "2+1"],
        ["NST 201", "Fundamentals and applications of Nanotechnology", "1+0"]
      ],
      "V": [
        ["BIF 301", "Lab course on sequence analysis", "0+2"],
        ["BIF 302", "Molecular Modeling and Simulation", "1+1"],
        ["BIF 303", "Genome sequencing, assembly and Annotation", "1+2"],
        ["BTB 301", "Molecular Marker Technology", "2+1"],
        ["BTB 302", "Genomics and proteomics", "1+1"],
        ["BTB 303", "Molecular Ecology and Evolution", "1+1"],
        ["BIC 301", "Enzymology and Enzyme Technologies", "2+1"],
        ["STA 322", "Probability and Random Process", "2+1"],
        ["COM 334", "PYTHON Programming", "2+1"],
        ["ARM 301", "Entrepreneurship Development and Business management", "1+1"]
      ],
      "VI": [
        ["BIF 305", "Phylogenetic Analysis", "1+1"],
        ["BIF 306", "Cheminformatics and drug discovery", "2+1"],
        ["BIF 307", "Metabolomics and Systems Biology", "2+1"],
        ["BIF 308", "Pharmacogenomics", "2+1"],
        ["COM 335", "Artificial Intelligence and Machine learning", "2+1"],
        ["COM 337", "Big data Analytics", "2+1"],
        ["TIP 351", "Intellectual Property Rights and Applications in Biotechnology", "1+0"],
        ["NCC 101", "National Cadet Corps", "0+1"],
        ["ELE", "Elective course", "2+1"]
      ],
      "VII": [
        ["BIF 401", "Student READY - Skill Development Module (Bioinformatics Work experience in Industry and Institutes) - 3 MONTHS", "0+20"]
      ],
      "VIII": [
        ["BIF 403", "Student READY - Project Formulation, Execution and Presentation", "0+10"],
        ["EDB", "Student READY - Entrepreneurial Development in Bioinformatics", "0+10"]
      ]
    }
  } },
  { id: "2025 onwards", label: "Syllabus for batches from 2025", from: 2025, to: 9999, programmes: {
    "B.Sc. (Hons.) Agriculture": {
      "I": [
        ["AGR 101", "Farming Based Livelihood Systems", "2+1"],
        ["BAE 101", "Introduction to Agricultural Engineering", "2+1"],
        ["BAE 102", "Surveying and leveling", "1+2"],
        ["BAE 103", "Basic Electrical Gadgets and instruments", "2+1"],
        ["TAM 151 / ENG 151", "மேளாண்மை அறிவியல் தமிழ் திறன் மேம்பாடு / English for Professional Skills", "0+2"],
        ["COM 101", "Agricultural Informatics and Artificial Intelligence for Engineers", "1+1"],
        ["COM 102", "Computer Programming and Data Structures", "1+1"],
        ["AEX 101", "Communication Skills", "1+1"],
        ["NSS 101 / NCC 101", "National Service scheme / National Cadet Corps", "0+1"]
      ],
      "II": [
        ["HOR 101", "Fundamentals of Horticulture", "2+1"],
        ["NSS 101 / NCC 101", "National Service Scheme I / National Cadet Corps I", "0+1"],
        ["MAT 101", "Introductory Mathematics", "0+1"],
        ["AEX 103", "Personality Development", "1+1"],
        ["ENS 101", "Environmental Studies and Disaster Management", "2+1"],
        ["SAC 102", "Soil Fertility Management", "2+1"],
        ["AEN 101", "Fundamentals of Entomology", "2+1"],
        ["AMP 101", "Livestock and Poultry Management", "2+1"],
        ["PAT 101", "Fundamentals of Plant Pathology", "2+1"],
        ["AGR 102", "Fundamentals of Agronomy", "2+1"],
        ["SEC 3", "Skill Enhancement course - III", "0+2"],
        ["SEC 4", "Skill Enhancement course - IV", "0+2"]
      ]
    },
    "B.Sc. (Hons.) Horticulture": {
      "I": [
        ["FSC 101", "Principles of Horticulture", "2+1"],
        ["FSC 102", "Plant Propagation and Nursery Management", "1+1"],
        ["FLG 101", "Commercial Production of Flower crops", "1+1"],
        ["AGR 101", "Farming Based Livelihood Systems", "2+1"],
        ["AGM 101", "Fundamentals of Microbiology", "2+1"],
        ["AEX 101", "Communication Skills", "1+1"],
        ["AEC 101", "Principles of Agricultural Economics", "1+0"],
        ["MAT 101", "Introductory Mathematics", "0+1"],
        ["NSS 101 / NCC 101", "National Service Scheme I / National Cadet Corps I", "0+1"],
        ["SEC I", "Skill Enhancement Course-I", "0+2"],
        ["SEC II", "Skill Enhancement Course-II", "0+2"]
      ]
    },
    "B.Sc. (Hons.) Agri Business Management": {
      "I": [
        ["TAM 151 / ENG 151", "Skill Enhancement Course I - மேளாண்மை அறிவியல் தமிழ் திறன் மேம்பாடு / English for Professional Skills", "0+2"],
        ["SEC 2", "Skill Enhancement Course II", "0+2"],
        ["ARM 101", "Introduction to Agribusiness Management", "2+0"],
        ["ARM 102", "Marketing of Agricultural Inputs and Outputs", "1+1"],
        ["AEC 101", "Principles of Agricultural Economics", "1+0"],
        ["AGR", "Introduction to Agronomy and Crop Production Technology", "1+1"],
        ["SST", "Principles and Practices of Seed Science and Technology", "1+1"],
        ["MAT 101", "Basic Mathematics", "0+1"],
        ["AGR", "Farming Based Livelihood Systems", "2+1"],
        ["AEX", "Communication Skills", "1+1"],
        ["NSS 101 / NCC 101", "National Service Scheme I / National Cadet Corps I", "0+1"]
      ],
      "II": [
        ["ARM 103", "Introduction to Marketing Management", "2+1"],
        ["ARM 104", "Introduction to Organizational Behaviour", "2+0"],
        ["ARM 105", "Introduction to Managerial Accounting", "1+1"],
        ["ARM 106", "Principles of Operations Management", "1+1"],
        ["GPB 113", "Introduction to Genetics and Plant breeding", "1+1"],
        ["AMP 101", "Livestock and Poultry Management", "2+1"],
        ["ENS 101", "Environmental Studies and Disaster Management", "2+1"],
        ["AEX 103", "Personality Development", "1+1"],
        ["SEC III", "Skill Enhancement Course 3", "0+2"],
        ["SEC IV", "Skill Enhancement Course 4", "0+2"],
        ["NSS 101 / NCC 101", "National Service Scheme I / National Cadet Corps I", "0+1"]
      ]
    },
    "B.Tech. (Agricultural Engineering)": {
      "I": [
        ["AGR 101", "Farming Based Livelihood Systems", "2+1"],
        ["BAE 101", "Introduction to Agricultural Engineering", "2+1"],
        ["BAE 102", "Surveying and leveling", "1+2"],
        ["BAE 103", "Basic Electrical Gadgets and instruments", "2+1"],
        ["TAM 151 / ENG 151", "மேளாண்மை அறிவியல் தமிழ் திறன் மேம்பாடு / English for Professional Skills", "0+2"],
        ["COM 101", "Agricultural Informatics and Artificial Intelligence for Engineers", "1+1"],
        ["COM 102", "Computer Programming and Data Structures", "1+1"],
        ["AEX 101", "Communication Skills", "1+1"],
        ["NSS 101 / NCC 101", "National Service Scheme / National Cadet Corps", "0+1"]
      ],
      "II": [
        ["AGE 121", "Skill Enhancement Module I : Construction Management and maintenance of protected cultivation structures", "0+8"],
        ["AGE 121", "Module: II Operation and Maintenance of Farm Machinery", "0+2"],
        ["AGE 121", "Module : III Primary Processing and Value addition and Cold Chain Logistics", "0+8"],
        ["AGE 121", "Module : IV Fabrication, Operation and Maintenance of Renewable Energy Cadgets", "0+8"],
        ["BAE 104", "Engineering Drawing", "0+8"],
        ["BAE 105", "Workshop Technology and Practices", "1+1"],
        ["AGR 114", "Crop Production and Protection Technologies", "2+1"],
        ["ENS 101", "Environmental Studies and Disaster Management", "2+1"],
        ["NSS 101 / NCC 101", "National Service Scheme / National Cadet Corps", "0+1"]
      ]
    },
    "B.Tech. (Energy and Environmental Engineering)": {
      "I": [
        ["EEE 101", "Fundamentals of Energy and Environmental Engineering", "2+1"],
        ["FMP 111", "Workshop Technology", "1+1"],
        ["BAE 111", "Engineering Drawing and Graphics", "1+2"],
        ["COM 102", "Computer Programming and Data Structures", "1+1"],
        ["AEX 101", "Communication Skills", "1+1"],
        ["COM 101", "Agricultural Information and Artificial Intelligence", "1+1"],
        ["TAM 151 / ENG 151", "மேளாண்மை அறிவியல் தமிழ் திறன் மேம்பாடு / English for Professional Skills", "0+2"],
        ["REE 151 / REE 152", "1. Energy audit, Energy Conservation and Energy efficiency (Skill - I) / 2. Fabrication, Operation and maintenance of Renewable energy gadgets (Skill - I)", "0+2"],
        ["SWE 151 / SWE 152", "1. Introduction to Environmental lab Practices / 2. Data Analysis and Visualization with MS - Excel, Power BI, tableau, Google Sheets and Locker studio", "0+2"],
        ["NSS 101 / NCC 101", "National Service Scheme / National Cadet Corps", "0+1"]
      ],
      "II": [
        ["BIC 102", "General Biochemistry", "2+1"],
        ["BAE 112", "Field Surveying and Leveling", "1+1"],
        ["FMP 112", "Basic Electrical Engineering", "2+1"],
        ["FMP 113", "Thermodynamics", "1+1"],
        ["AGR 114", "Crop Production and Protection Technologies", "2+1"],
        ["ENS 101", "Environmental Studies and Disaster Management", "2+1"],
        ["REE 123", "Valorisation of Agri- Biomass and organic waste", "0+2"],
        ["SWE 123", "Introduction to waste Management Practices and Standards", "0+2"],
        ["NSS 101 / NCC 101", "National Service Scheme / National Cadet Corps", "0+1"]
      ]
    },
    "B.Tech. (Food Technology)": {
      "I": [
        ["FPE 101", "Fundamentals of Food Processing", "2+1"],
        ["FMP 111", "Workshop Technology", "1+1"],
        ["BIC 111", "Food Chemistry I", "2+1"],
        ["BAE 111", "Engineering Drawing and Graphics", "1+2"],
        ["AGR 101", "Farming Based Livelihood System", "2+1"],
        ["AEX 101", "Communication Skills", "1+1"],
        ["FPE 121", "Introduction to Milling (Rice, Dhal, Spice etc.)", "0+2"],
        ["FMP 121", "Introduction to Auto CAD", "0+2"],
        ["TAM 121 / ENG 121", "மேளாண்மை அறிவியல் தமிழ் திறன் மேம்பாடு / English for Professional Skills", "0+2"],
        ["NSS 101", "National Service Scheme / National Cadet Corps", "0+1"]
      ],
      "II": [
        ["FPE 102", "Post - Harvest Engineering", "2+1"],
        ["AGM 122", "General Microbiology", "2+1"],
        ["FPE 103", "Unit Operations in Food Processing", "2+1"],
        ["FMP 113", "Thermodynamics", "1+1"],
        ["FMP 112", "Basic Electrical Engineering", "2+1"],
        ["ENS 101", "Environmental Studies and Disaster Management", "2+1"],
        ["FPE 126", "Introduction to Bottling and Canning Line", "0+2"],
        ["FPE 127", "Introduction to Manufacturing of Bakery Products", "0+2"],
        ["NSS 101 / NCC 101", "National Service Scheme / National Cadet Corps", "0+1"]
      ]
    },
    "B.Tech. (Agricultural Information Technology)": {
      "I": [
        ["COM 131", "Fundamentals of Computers", "1+1"],
        ["COM 132", "Programming in C", "2+1"],
        ["SWE 111", "Soil and Water Conversation Engineering", "1+1"],
        ["PHY 152", "Basic Electronics", "2+1"],
        ["SAC 101", "Fundamentals of Soil Science", "2+1"],
        ["COM 151", "Linux Operating System (SEC- I)", "0+2"],
        ["SWE 152", "Data Analysis and Visualization with MS Excel, Power BI, Tableau, Google Sheets & Looker Studio", "0+2"],
        ["TAM 151 / ENG 151", "மேளாண்மை அறிவியல் தமிழ் திறன் மேம்பாடு / English for Professional Skills", "0+2"],
        ["AEX 101", "Communication Skills", "1+1"],
        ["NSS 101 / NCC 101", "National Service scheme / National Cadet Corps", "0+1"]
      ],
      "II": [
        ["COM 103", "Data Structures and Algorithms using C", "2+1"],
        ["COM 104", "Object Oriented Programming", "2+1"],
        ["AGR 114", "Crop Production and Protection Technologies", "2+1"],
        ["CRP 111", "Plant Physiology", "2+1"],
        ["ENS 101", "Environmental Studies and Disaster Management", "2+1"],
        ["COM 122", "Computer Hardware, Software and Digital Platforms (SEC - III)", "0+2"],
        ["COM 123", "MATLAB Programming (SEC - IV)", "0+2"],
        ["NSS 101 / NCC 101", "National Service scheme / National Cadet Corps", "0+1"]
      ]
    },
    "B.Tech. (Biotechnology)": {
      "I": [
        ["TAM 151 / ENG 151", "Skill Enhancement Course I - மேளாண்மை அறிவியல் தமிழ் திறன் மேம்பாடு / English for Professional Skills", "0+2"],
        ["SEC 2", "Skill Enhancement Course II - Practices in Plant Tissue Culture", "0+2"],
        ["BTB 101", "Introduction to Biotechnology", "2+0"],
        ["BTB 102", "Introductory Cell Biology", "2+1"],
        ["BTB 103", "Laboratory Management and Instrumentation", "0+2"],
        ["PBG 101", "Fundamentals of Genetics", "2+1"],
        ["MAT 101", "Introductory Mathematics", "0+1"],
        ["AGR 101", "Farming based Livelihood Systems", "2+1"],
        ["AEX 101", "Communication Skill", "1+1"],
        ["NSS 101 / NCC 101", "National Service Scheme I / National Cadet Corps I", "0+1"]
      ],
      "II": [
        ["BTB 104", "Molecular Biology", "3+0"],
        ["GPB 112", "Introduction to Plant Breeding", "2+1"],
        ["AGM 111", "Elementary Microbiology", "2+1"],
        ["ENS 101", "Environmental Studies and Disaster Management", "2+1"],
        ["AEX 102", "Personality Development", "1+1"],
        ["SEC 3", "Skill Enhancement Course - 3 (BTB 122 Basic Techniques of Molecular Biology and Biotechnology)", "0+2"],
        ["SEC 4", "Skill Enhancement Course - 4 (BIF 121 Bioinformatics and Bio computation)", "0+2"],
        ["NCC 101 / NSS 101", "National Cadet Corps II / National Service Scheme II", "0+1"]
      ]
    },
    "B.Tech. (Bioinformatics)": {
      "I": [
        ["TAM 151 / ENG 151", "Skill Enhancement Course I - மேளாண்மை அறிவியல் தமிழ் திறன் மேம்பாடு / English for Professional Skills", "0+2"],
        ["SEC 2", "Skill Enhancement Course II - Foundations of Linux and Linux Essentials", "0+2"],
        ["COM 101", "Programming in C", "2+1"],
        ["BTB 101", "Introduction to Biotechnology", "2+0"],
        ["BTB 102", "Introductory Cell Biology", "2+1"],
        ["AGR 101", "Farming Based Livelihood Systems", "2+1"],
        ["MAT 101", "Introductory Mathematics", "0+1"],
        ["PBG 111", "Fundamentals of Genetics", "2+1"],
        ["AEX 101", "Communication Skills", "1+1"],
        ["NSS 101 / NCC 101", "National Service Scheme I / National Cadet Corps I", "0+1"]
      ],
      "II": [
        ["BIF 101", "Fundamentals of Bioinformatics", "2+0"],
        ["BTB 104", "Molecular Biology", "3+0"],
        ["GPB 112", "Introduction to Plant Breeding", "2+1"],
        ["COM 103", "Data Structures and Algorithms using C", "2+1"],
        ["AGM 111", "Elementary Microbiology", "2+1"],
        ["ENS 101", "Environmental Studies and Disaster Management", "2+1"],
        ["AEX 103", "Personality Development", "1+1"],
        ["SEC 3", "Skill Enhancement Course - 3 (BIF 121 Bioinformatics and Bio computation)", "0+2"],
        ["SEC 4", "Skill Enhancement Course - 4 (BTB 122 Basic Techniques of Molecular Biology and Biotechnology)", "0+2"],
        ["NSS 101 / NCC 101", "National Service Scheme I / National Cadet Corps I", "0+1"]
      ]
    }
  } }
];;
