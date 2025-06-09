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

    return NextResponse.json(component);
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 