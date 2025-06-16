import { NextResponse } from 'next/server';

interface ComponentSpec {
  id: number;
  category: string;
  name: string;
  price: number;
  image: string;
  description: string;
  specs: string[];
  detailedSpecs: {
    [key: string]: {
      value: string | number;
      score: number;
      unit?: string;
    };
  };
  compatibility: {
    socket?: string;
    chipset?: string[];
    ramType?: string;
    formFactor?: string;
    tdp?: number;
  };
}

// This would be replaced with a database in production
const components: ComponentSpec[] = [
  // ... your component data from the Components page
];

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const component = components.find(c => c.id === parseInt(params.id));
    
    if (!component) {
      return NextResponse.json(
        { error: 'Component not found' },
        { status: 404 }
      );
    }

    // Get compatible components based on the current component's specifications
    const recommendations = components.filter(c => {
      if (c.id === component.id) return false; // Don't recommend the same component

      // CPU to Motherboard compatibility
      if (component.category === 'CPU' && c.category === 'Motherboard') {
        return c.compatibility.socket === component.compatibility.socket;
      }

      // Motherboard to CPU compatibility
      if (component.category === 'Motherboard' && c.category === 'CPU') {
        return c.compatibility.socket === component.compatibility.socket;
      }

      // RAM compatibility
      if ((component.category === 'Motherboard' && c.category === 'RAM') ||
          (component.category === 'RAM' && c.category === 'Motherboard')) {
        return c.compatibility.ramType === component.compatibility.ramType;
      }

      // PSU compatibility (based on TDP requirements)
      if (component.category === 'PSU') {
        return c.compatibility.tdp && c.compatibility.tdp <= component.compatibility.tdp!;
      }

      // GPU to PSU compatibility
      if (component.category === 'GPU' && c.category === 'PSU') {
        return component.compatibility.tdp && component.compatibility.tdp <= c.compatibility.tdp!;
      }

      return false;
    });

    return NextResponse.json(recommendations);
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 