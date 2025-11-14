"use client"

import { Star, Globe } from "lucide-react"
import { useEffect, useState } from "react"

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const [language, setLanguage] = useState<"de" | "pt" | "fr">("de")

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const translations = {
    de: {
      heroTitle: "Entdecke das natürliche Rezept inspiriert von Mounjaro",
      heroSubtitle: "das Körper in wenigen Wochen verändert",
      heroTagline: "100% natürlich, sicher und mit echten Ergebnissen!",
      heroSubtext: "Drastischer Gewichtsverlust in wenigen Wochen",
      ctaButton: "Ich möchte das Rezept jetzt kennenlernen!",
      benefitsTitle: "VORTEILE",
      benefits: [
        "Beschleunigt den Stoffwechsel",
        "Reduziert den Appetit",
        "Beseitigt Toxine",
        "Verbessert die Vitalität",
        "Entwässert auf natürliche Weise",
        "Verbrennt Fett",
        "Erhöht die Kalorienverbrennung",
        "Kontrolliert den Blutzuckerspiegel",
        "Essentiell für die Gesundheit",
        "Erhält das ideale Gewicht",
      ],
      whyTitle: "Warum ist das natürliche Mounjaro-Rezept die beste Wahl?",
      whyText1:
        "Das natürliche Mounjaro-Rezept ist die richtige Wahl für alle, die es leid sind, leere Versprechungen zu hören und echte Ergebnisse auf natürliche und sichere Weise möchten.",
      whyText2:
        "Während viele Formeln auf dem Markt künstliche Inhaltsstoffe oder extreme Beschränkungen verwenden, setzt Mounjaro auf die Kraft der reinen Natur – eine einzigartige Kombination aus Kräutern und thermogenen Lebensmitteln, die den Stoffwechsel anregen, den Appetit reduzieren und dem Körper helfen, Toxine mühelos auszuscheiden.",
      whyHighlight1: "💚 100% natürlich. 0% Chemie. 100% Ergebnis.",
      whyText3:
        "Jeder Inhaltsstoff wurde ausgewählt, um deinen Körper zu stärken, seine Funktionen auszugleichen und deine Routine mit mehr Energie, Vitalität und Leichtigkeit zu transformieren.",
      whyText4:
        "Das Ergebnis? Ein Körper, der für dich arbeitet – Fett verbrennt, auf natürliche Weise entwässert und das Wohlbefinden wiederherstellt, das du verdienst.",
      whyText5:
        "Aber das Geheimnis von Mounjaro geht über das Rezept hinaus: Es ist der leichte und bewusste Lebensstil, den es inspiriert. In wenigen Tagen spürst du mehr Energie, besseren Schlaf und erkennst, dass der Körper mit Vitalität antwortet – alles, ohne auf den Genuss des guten Essens und des besseren Lebens zu verzichten.",
      whyHighlight2: "🌿 Mounjaro ist keine Mode, es ist eine natürliche Bewegung.",
      whyText6:
        "Eine intelligente Wahl für alle, die ihre Gesundheit pflegen, den Traumkörper erreichen und mit mehr Vitalität leben möchten – alles mit der Kraft der Pflanzen und der Einfachheit der Natur.",
      whyHighlight3: "✨ Mounjaro: deine leichtere Routine, dein aktiverer Körper, dein bestes Ich jeden Tag.",
      testimonialsTitle: "Kundenerfahrungen",
      finalCTA: "SICHERN SIE SICH JETZT IHR REZEPT!",
      disclaimer: "KONSULTIEREN SIE VOR BEGINN JEDER BEHANDLUNG IMMER EINEN FACHMANN FÜR GESUNDHEIT",
    },
    pt: {
      heroTitle: "Descubra a receita natural inspirada no Mounjaro",
      heroSubtitle: "que está transformando corpos em poucas semanas",
      heroTagline: "100% natural, segura e com resultados reais!",
      heroSubtext: "Perda de peso drástica em poucas semanas",
      ctaButton: "Quero conhecer a receita agora!",
      benefitsTitle: "BENEFÍCIOS",
      benefits: [
        "Acelera o metabolismo",
        "Reduz o apetite",
        "Elimina toxinas",
        "Melhora a disposição",
        "Desincha naturalmente",
        "Queima gordura",
        "Aumenta a queima calórica",
        "Controla os níveis de glicose",
        "Essencial para a saúde",
        "Mantém o peso ideal",
      ],
      whyTitle: "Por que a Receita Natural de Mounjaro é a melhor escolha?",
      whyText1:
        "A Receita Natural Mounjaro é a escolha certa para quem cansou de promessas vazias e quer resultados reais, de forma natural e segura.",
      whyText2:
        "Enquanto muitas fórmulas no mercado usam ingredientes artificiais ou restrições extremas, Mounjaro aposta na força da natureza pura — uma combinação única de ervas e alimentos termogênicos que despertam o metabolismo, reduzem o apetite e ajudam o corpo a eliminar toxinas sem esforço.",
      whyHighlight1: "💚 100% natural. 0% química. 100% resultado.",
      whyText3:
        "Cada ingrediente foi selecionado para potencializar seu corpo, equilibrar suas funções e transformar sua rotina com mais energia, disposição e leveza.",
      whyText4:
        "O resultado? Um corpo que trabalha a seu favor — queimando gordura, desinchando naturalmente e recuperando o bem-estar que você merece.",
      whyText5:
        "Mas o segredo de Mounjaro vai além da receita: é o estilo de vida leve e consciente que ela inspira. Em poucos dias, você sente mais energia, melhora no sono e percebe que o corpo responde com vitalidade — tudo isso sem abrir mão do prazer de comer bem e viver melhor.",
      whyHighlight2: "🌿 Mounjaro não é uma moda, é um movimento natural.",
      whyText6:
        "Uma escolha inteligente para quem quer cuidar da saúde, conquistar o corpo dos sonhos e viver com mais disposição — tudo isso com o poder das plantas e a simplicidade da natureza.",
      whyHighlight3: "✨ Mounjaro: sua rotina mais leve, seu corpo mais ativo, seu melhor eu todos os dias.",
      testimonialsTitle: "Depoimentos de Clientes",
      finalCTA: "GARANTA SUA RECEITA AGORA!",
      disclaimer: "CONSULTE SEMPRE UM PROFISSIONAL DE SAÚDE ANTES DE INICIAR QUALQUER TRATAMENTO",
    },
    fr: {
      heroTitle: "Découvrez la recette naturelle inspirée de Mounjaro",
      heroSubtitle: "qui transforme les corps en quelques semaines",
      heroTagline: "100% naturel, sûr et avec des résultats réels !",
      heroSubtext: "Perte de poids drastique en quelques semaines",
      ctaButton: "Je veux découvrir la recette maintenant !",
      benefitsTitle: "AVANTAGES",
      benefits: [
        "Accélère le métabolisme",
        "Réduit l'appétit",
        "Élimine les toxines",
        "Améliore la vitalité",
        "Désinfle naturellement",
        "Brûle les graisses",
        "Augmente la combustion des calories",
        "Contrôle le taux de glucose",
        "Essentiel pour la santé",
        "Maintient le poids idéal",
      ],
      whyTitle: "Pourquoi la recette naturelle de Mounjaro est-elle le meilleur choix ?",
      whyText1:
        "La recette naturelle Mounjaro est le bon choix pour ceux qui en ont assez des promesses vides et qui veulent des résultats réels, de manière naturelle et sûre.",
      whyText2:
        "Alors que de nombreuses formules sur le marché utilisent des ingrédients artificiels ou des restrictions extrêmes, Mounjaro mise sur la puissance de la nature pure – une combinaison unique d'herbes et d'aliments thermogènes qui stimulent le métabolisme, réduisent l'appétit et aident le corps à éliminer les toxines sans effort.",
      whyHighlight1: "💚 100% naturel. 0% chimie. 100% résultats.",
      whyText3:
        "Chaque ingrédient a été sélectionné pour renforcer votre corps, équilibrer ses fonctions et transformer votre routine avec plus d'énergie, de vitalité et de légèreté.",
      whyText4:
        "Le résultat ? Un corps qui travaille pour vous – brûlant les graisses, se dégonflant naturellement et retrouvant le bien-être que vous méritez.",
      whyText5:
        "Mais le secret de Mounjaro va au-delà de la recette : c'est le mode de vie léger et conscient qu'elle inspire. En quelques jours, vous ressentez plus d'énergie, une meilleure qualité de sommeil et percevez que votre corps réagit avec vitalité – tout cela sans renoncer au plaisir de bien manger et de mieux vivre.",
      whyHighlight2: "🌿 Mounjaro n'est pas une mode, c'est un mouvement naturel.",
      whyText6:
        "Un choix intelligent pour ceux qui veulent prendre soin de leur santé, atteindre le corps de leurs rêves et vivre avec plus de vitalité – tout cela avec la puissance des plantes et la simplicité de la nature.",
      whyHighlight3:
        "✨ Mounjaro : votre routine plus légère, votre corps plus actif, votre meilleur vous tous les jours.",
      testimonialsTitle: "Témoignages de Clients",
      finalCTA: "GARANTISSEZ VOTRE RECETTE MAINTENANT !",
      disclaimer: "CONSULTEZ TOUJOURS UN PROFESSIONNEL DE SANTÉ AVANT DE COMMENCER TOUT TRAITEMENT",
    },
  }

  const t = translations[language]

  const testimonials = [
    {
      name: "Mariana",
      age: 34,
      city: language === "de" ? "Berlin/Deutschland" : language === "fr" ? "Paris/France" : "São Paulo/SP",
      image: "/mariana.jpg",
      rating: 5,
      textDe:
        "Ich hatte schon alles versucht, um abzunehmen – Diäten, Fitnessstudio, sogar teure Medikamente. Als ich Mounjaro kennenlernte, gebe ich zu, war ich skeptisch. Aber schon in zwei Wochen bemerkte ich einen Unterschied! Mein Appetit nahm natürlich ab und ich begann, Gewicht zu verlieren, ohne zu leiden. Heute bin ich 9 kg leichter, mit mehr Energie und Selbstwertgefühl. Das Beste ist zu wissen, dass es ein natürliches und sicheres Rezept ist. Ich empfehle es sehr!",
      textPt:
        "Eu já tinha tentado de tudo pra emagrecer — dietas, academia, até remédios caros. Quando conheci o Mounjaro, confesso que fiquei desconfiada. Mas em duas semanas já senti diferença! Meu apetite diminuiu naturalmente e comecei a perder peso sem sofrimento. Hoje estou 9 kg mais leve, com mais energia e autoestima lá em cima. O melhor é saber que é uma receita natural e segura. Recomendo de olhos fechados!",
      textFr:
        "J'avais tout essayé pour maigrir – régimes, salle de sport, même des médicaments coûteux. Quand j'ai découvert Mounjaro, je dois avouer que j'étais sceptique. Mais en seulement deux semaines, j'ai remarqué une différence ! Mon appétit a naturellement diminué et j'ai commencé à perdre du poids sans souffrir. Aujourd'hui, j'ai perdu 9 kg, avec plus d'énergie et de confiance. Le mieux, c'est de savoir que c'est une recette naturelle et sûre. Je la recommande les yeux fermés !",
    },
    {
      name: "Carlos",
      age: 42,
      city: language === "de" ? "München/Deutschland" : language === "fr" ? "Lyon/France" : "Belo Horizonte/MG",
      image: "/carlos.jpg",
      rating: 5,
      textDe:
        "Ich hatte immer Schwierigkeiten, mein Gewicht zu kontrollieren, besonders wegen der Hektik der Arbeit. Mounjaro war ein Wendepunkt für mich. Ich begann es zu verwenden, ohne meine Routine radikal zu ändern, und sah dennoch Ergebnisse: weniger Schwellungen, mehr Energie und 7 kg weniger in 1 Monat! Was mir am besten gefällt, ist, dass es keine Nebenwirkungen hat – nur Vorteile. Endlich habe ich etwas gefunden, das wirklich funktioniert.",
      textPt:
        "Sempre tive dificuldade pra controlar o peso, principalmente por causa da correria do trabalho. O Mounjaro foi um divisor de águas pra mim. Comecei a usar sem mudar radicalmente a rotina e mesmo assim vi resultado: menos inchaço, mais disposição e 7 kg a menos em 1 mês! O que mais gosto é que não tem efeito colateral — só benefícios. Finalmente achei algo que funciona de verdade.",
      textFr:
        "J'avais toujours du mal à contrôler mon poids, surtout à cause du rythme effréné du travail. Mounjaro a été un tournant pour moi. J'ai commencé à l'utiliser sans changer radicalement ma routine et j'ai quand même vu des résultats : moins d'enflures, plus d'énergie et 7 kg de moins en 1 mois ! Ce que j'aime le plus, c'est qu'il n'y a pas d'effets secondaires – seulement des avantages. J'ai enfin trouvé quelque chose qui fonctionne vraiment.",
    },
    {
      name: "Ana",
      age: 28,
      city: language === "de" ? "Hamburgo/Deutschland" : language === "fr" ? "Marseille/France" : "Curitiba/PR",
      image: "/ana.jpg",
      rating: 5,
      textDe:
        "Ich wollte etwas Natürliches, ohne diese wundersamen Versprechungen. Mounjaro überraschte mich! Ich fühlte meinen Körper leichter, mein Stoffwechsel beschleunigte sich und sogar meine Haut verbesserte sich. In 45 Tagen habe ich 6 kg abgenommen und mache weiter. Es ist erstaunlich, wie ein einfaches und natürliches Rezept so viel bewirken kann. Heute fühle ich mich selbstbewusster und glücklicher mit meinem Spiegelbild!",
      textPt:
        "Eu queria algo natural, sem aquelas promessas milagrosas. O Mounjaro me surpreendeu! Senti meu corpo mais leve, meu metabolismo acelerou e até minha pele melhorou. Em 45 dias, perdi 6 kg e continuo firme. É incrível como uma receita simples e natural pode transformar tanto. Hoje me sinto mais confiante e feliz com o espelho!",
      textFr:
        "Je voulais quelque chose de naturel, sans ces promesses miraculeuses. Mounjaro m'a surpris ! J'ai senti mon corps plus léger, mon métabolisme s'est accéléré et ma peau s'est même améliorée. En 45 jours, j'ai perdu 6 kg et je continue. C'est incroyable comme une recette simple et naturelle peut changer autant. Aujourd'hui, je me sens plus confiante et heureuse en me regardant dans le miroir !",
    },
  ]

  const getTestimonialText = (index: number) => {
    if (language === "de") return testimonials[index].textDe
    if (language === "fr") return testimonials[index].textFr
    return testimonials[index].textPt
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-emerald-50 to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-emerald-200 to-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-orange-200 to-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-gradient-to-br from-cyan-200 to-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-emerald-200 to-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-6000"></div>
      </div>

      <div className="relative z-10">
        <header className="pt-6 px-6 flex justify-between items-center backdrop-blur-sm">
          <div></div>
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-md rounded-full px-4 py-2 shadow-lg border border-emerald-200/50">
            <Globe className="w-4 h-4 text-emerald-600" />
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as "de" | "pt" | "fr")}
              className="bg-transparent text-sm font-semibold text-emerald-900 focus:outline-none cursor-pointer"
            >
              <option value="de">Deutsch</option>
              <option value="pt">Português</option>
              <option value="fr">Français</option>
            </select>
          </div>
        </header>

        <header className="pt-6 pb-8 px-6 backdrop-blur-sm flex justify-center">
          <div className="animate-float">
            {language === "de" && (
              <img
                src="/logo-de.png"
                alt="Mounjaro NATURREZEPT Logo"
                className="w-96 h-96 object-contain drop-shadow-lg"
              />
            )}
            {language === "pt" && (
              <img src="/logo-pt.png" alt="Mounjaro Logo" className="w-96 h-96 object-contain drop-shadow-lg" />
            )}
            {language === "fr" && (
              <img
                src="/logo-fr.png"
                alt="Mounjaro RECETTE NATURELE Logo"
                className="w-96 h-96 object-contain drop-shadow-lg"
              />
            )}
          </div>
        </header>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-12 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content - Animated text */}
            <div className="space-y-6">
              <div className="animate-fade-in">
                <h2
                  className="font-montserrat text-2xl md:text-3xl lg:text-4xl font-extrabold text-emerald-900 leading-tight text-balance"
                  style={{ fontWeight: 800 }}
                >
                  {t.heroTitle}
                  <br />
                  {t.heroSubtitle}
                  <br />
                  {t.heroTagline}
                </h2>
              </div>

              <div className="animate-fade-in animation-delay-200">
                <p className="text-xl text-gray-700 text-pretty font-medium">{t.heroSubtext}</p>
              </div>

              <div className="animate-fade-in animation-delay-400">
                <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 shadow-lg animate-pulse-glow">
                  {t.ctaButton}
                </button>
              </div>
            </div>

            {/* Right Image - Animated */}
            <div className="flex justify-center md:justify-end animate-fade-in animation-delay-400">
              <img
                src="/mulher-fit-saudavel-sorrindo.jpg"
                alt="Mulher saudável e feliz"
                className="w-full max-w-md rounded-2xl object-cover shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </section>

        {/* Repositioned Image Section - Full width image divider between hero and benefits */}
        <section className="-mx-[calc(50vw-50%)] w-screen py-8">
          <img
            src="/mounjaro-ingredientes.jpg"
            alt="Produto Mounjaro - Ingredientes"
            className="w-full h-auto object-contain"
          />
        </section>

        {/* Benefits Section */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 border border-white/50">
            <div className="animate-box-glow mb-8">
              <h3 className="text-3xl md:text-4xl font-bold text-emerald-900 text-center">{t.benefitsTitle}</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 group animate-fade-in-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center mt-1 group-hover:scale-125 transition-transform duration-300 animate-check-pop">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-800 text-lg font-medium group-hover:text-emerald-700 transition-colors">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Mounjaro Section */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="animate-box-glow mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 text-center mb-8">{t.whyTitle}</h2>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-3xl p-8 md:p-12 border border-emerald-200/50 shadow-xl">
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p className="text-pretty">{t.whyText1}</p>
              <p className="text-pretty">{t.whyText2}</p>
              <div className="text-center py-4">
                <p className="font-semibold text-emerald-700 text-xl">{t.whyHighlight1}</p>
              </div>
              <p className="text-pretty">{t.whyText3}</p>
              <p className="text-pretty">{t.whyText4}</p>
              <p className="text-pretty">{t.whyText5}</p>
              <div className="text-center py-4 bg-white/60 rounded-xl">
                <p className="font-bold text-emerald-800 text-lg">{t.whyHighlight2}</p>
              </div>
              <p className="text-pretty">{t.whyText6}</p>
              <div className="text-center py-4">
                <p className="font-bold text-emerald-700 text-xl">{t.whyHighlight3}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="animate-box-glow mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 text-center">{t.testimonialsTitle}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group animate-fade-in-up hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-emerald-100/50 backdrop-blur-sm h-full flex flex-col">
                  <div className="relative h-64 bg-gradient-to-br from-emerald-100 to-blue-100 overflow-hidden">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <h4 className="text-base font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-xs text-gray-500 mb-4 font-medium">
                        {testimonial.age} {language === "de" ? "Jahre" : language === "fr" ? "ans" : "anos"} –{" "}
                        {testimonial.city}
                      </p>
                      <p className="text-xs text-gray-700 leading-relaxed mb-4 font-light text-justify">
                        {getTestimonialText(index)}
                      </p>
                    </div>
                    <div className="flex justify-center gap-1 mt-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <div key={i} className="animate-star-pop" style={{ animationDelay: `${i * 100}ms` }}>
                          <Star className="w-5 h-5 fill-amber-400 text-amber-400 drop-shadow-lg" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-gray-200/30 mt-12 backdrop-blur-sm">
          <div className="flex justify-center mb-8">
            <button className="bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-700 hover:from-emerald-600 hover:via-emerald-700 hover:to-emerald-800 text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 hover:shadow-2xl hover:scale-110 shadow-lg animate-pulse-glow">
              {t.finalCTA}
            </button>
          </div>
          <p className="text-center text-sm text-gray-600 leading-relaxed font-medium">{t.disclaimer}</p>
        </footer>
      </div>
    </div>
  )
}
