<script>
    export let category;
    import { Utensils, Car, Zap, Beer, Heart, Banknote, ShoppingBag, Home, GraduationCap, CircleDollarSign } from 'lucide-svelte';

    const map = {
        'Comida': Utensils,
        'Transporte': Car,
        'Servicios': Zap,
        'Ocio': Beer,
        'Salud': Heart,
        'Sueldo': Banknote,
        'Ventas': ShoppingBag,
        'Hogar': Home,
        'Educación': GraduationCap
    };
</script>

<svelte:component this={map[category] || CircleDollarSign} class="w-5 h-5" />
