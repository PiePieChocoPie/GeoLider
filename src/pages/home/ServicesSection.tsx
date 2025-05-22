import './ServicesSection.css';

export default function ServicesSection() {
  const services = [
    "Обработка и интерпретация",
    "Сопровождение",
    "Супервайзинг",
    "Системная интеграция",
    "Обучение специалистов",
    "Анализ геоданных",
    "Аудит и консалтинг",
    "Разработка алгоритмов"
  ];

  return (
    <div className="services-section">
      <h2 className="services-title">Услуги</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            {service}
          </div>
        ))}
      </div>
    </div>
  );
}
