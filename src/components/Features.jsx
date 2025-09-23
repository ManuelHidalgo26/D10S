import React from 'react';

const features = [
  {
    title: 'Comunidad activa',
    description:
      'Canales abiertos 24/7, votaciones periódicas y participación en proyectos sociales impulsados por holders.',
    icon: '🤝',
  },
  {
    title: 'Liquidez transparente',
    description:
      'Reportes semanales, contratos auditados y dashboard público para seguir cada movimiento del tesoro.',
    icon: '🔍',
  },
  {
    title: 'Impacto real',
    description:
      'Financiamos becas deportivas, acciones culturales y causas solidarias en toda Latinoamérica.',
    icon: '🌎',
  },
  {
    title: 'Educación cripto',
    description:
      'Workshops y contenidos gratuitos para que cualquier persona pueda aprender y sumarse al ecosistema Web3.',
    icon: '📚',
  },
  {
    title: 'Eventos exclusivos',
    description:
      'Experiencias en vivo con figuras del deporte y la cultura, sorteos y meetups presenciales.',
    icon: '🎉',
  },
  {
    title: 'Roadmap claro',
    description:
      'Objetivos trimestrales, hitos verificables y actualizaciones constantes desde el equipo core.',
    icon: '🛣️',
  },
];

const Features = () => {
  return (
    <section id="features" className="bg-white py-16" aria-labelledby="features-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center text-azul space-y-4">
          <h2 id="features-heading" className="text-3xl font-semibold">
            Más que una memecoin: una comunidad en movimiento
          </h2>
          <p className="text-azul/80">
            D10$ nació para amplificar la pasión argentina en todo el mundo. Estos son algunos de los pilares que nos
            diferencian.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, description, icon }) => (
            <article
              key={title}
              className="flex flex-col gap-3 rounded-2xl border border-gris/60 bg-blanco p-6 text-azul shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span aria-hidden="true" className="text-3xl">
                {icon}
              </span>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-sm text-azul/80 sm:text-base">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
