// mockRecommendationEngine.js
// Clinical Matrix Logic (Awaiting Dr. Nada's Validation)
// Focuses on Safety, Skin Types, and Medical-grade recommendations.

export const mockQuestions = [
  {
    id: 'skin_type',
    question: 'How does your skin feel by mid-day?',
    options: [
      { id: 'dry', label: 'Tight and dehydrated', value: 'dry_dehydrated' },
      { id: 'oily', label: 'Shiny or reactive', value: 'oily_reactive' },
      { id: 'balanced', label: 'Generally comfortable', value: 'all_types' }
    ]
  },
  {
    id: 'primary_concern',
    question: 'What is your primary clinical focus?',
    options: [
      { id: 'acne', label: 'Breakouts & Texture', value: 'acne_texture' },
      { id: 'redness', label: 'Redness & Sensitivity', value: 'redness' },
      { id: 'aging', label: 'Dullness & DNA Repair', value: 'aging_dna' }
    ]
  }
];

export const getRecommendation = (answers) => {
  const { skin_type, primary_concern } = answers;

  // The Clinical Matrix (Edge Cases Handled)
  if (skin_type === 'dry_dehydrated' && primary_concern === 'acne_texture') {
    return {
      title: 'Ectoheal + Sebufree Spot Treatment',
      description: 'Focus on barrier restoration first to prevent irritation, followed by targeted spot treatment for texture.',
      products: ['Ectoheal Barrier Cream', 'Sebufree Spot Gel']
    };
  }

  if (skin_type === 'oily_reactive' && primary_concern === 'redness') {
    return {
      title: 'Ectoheal Gentle Ritual',
      description: 'Calms reactivity and reduces redness without using high-acid stripping agents.',
      products: ['Ectoheal Cleanser', 'Ectoheal Barrier Cream']
    };
  }

  // Default Fallback / Anti-Aging (High-molecular focus)
  return {
    title: 'Silky Serum Ritual',
    description: 'High-molecular weight focus for complete DNA repair, cellular turnover, and deep hydration.',
    products: ['Silky Serum', 'Ectoheal Barrier Cream']
  };
};
